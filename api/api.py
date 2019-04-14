from typing import Union
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
import json
import requests
import time
from enum import Enum, auto

from exceptions import (AccountError, AccountAlreadyExist, 
                        AccountDoesNotExist, AccountInvalidPassword)
from account import Account

app = Flask(__name__)
api = Api(app)

token = 'e7675dd3-ff3b-434b-95aa-70251cc3784b_88140dd4-f13e-4ce3-8322-6eaf2ee9a2d2'

class InvalidUsage(Exception):
    status_code = 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv

@app.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response

class Accounts(Resource):
    def post(self):
        data = json.loads(request.data.decode('utf-8'))
        if 'username' not in data or 'password' not in data:
            raise InvalidUsage('Missing username or password.', status_code=400)
        try: 
            acct = Account.load_account(data['username'], data['password'])
            return acct.info, 200
        except AccountInvalidPassword:
            raise InvalidUsage('Invalid password.', status_code=400)
        except AccountDoesNotExist:
            # create account
            info = data.get('information', {})
            try:
                Account.create_account(data['username'], data['password'], info)
            except AccountAlreadyExist:
                raise InvalidUsage('This is not good.', status_code=400)
            return info, 201

class Offers(Resource):
    def post(self):
        data = json.loads(request.data.decode('utf-8'))
        print(data)
        if 'username' not in data or 'password' not in data:
            raise InvalidUsage('Missing username or password.', status_code=400)
        try: 
            acct = Account.load_account(data['username'], data['password'])
        except AccountInvalidPassword:
            raise InvalidUsage('Invalid password.', status_code=400)
        except AccountDoesNotExist:
            raise InvalidUsage('Account does not exist.', status_code=400)
        loan_amt = data.get('override', {}).get('loanInformation', {}).get('loanAmount') 
        if loan_amt is not None:
            try:
                loan_amt = float(loan_amt)
            except ValueError:
                raise InvalidUsage(f'Invalid loanAmount: {loan_amt}, type: {type(loan_amt)}', 400)
            print(f'Loan amount updated: {loan_amt}')
            acct.info['loanInformation'] = acct.info.get('loanInformation', {})
            acct.info['loanInformation']['loanAmount'] = loan_amt
        response = requests.post('https://api.evenfinancial.com/leads/rateTables',
            headers={'Authorization': f'Bearer {token}'},
            json=acct.info)
        if response.status_code not in (201, 200):
            raise InvalidUsage(f'Even API error. status_code: {response.status_code}', status_code=400)
        uuid = response.json()['uuid']
        while len(response.json().get('pendingOriginators', [])) != 0 or \
            len(response.json().get('pendingResponses', [])) != 0:
            response = requests.get(f'https://api.evenfinancial.com/originator/rateTables/{uuid}',
                            headers={'Authorization': f'Bearer {token}'})
            time.sleep(0.5)
        return response.json(), 201


api.add_resource(Accounts, '/accounts')
api.add_resource(Offers, '/offers')

if __name__ == '__main__':
     app.run(port='5002',debug=True)
