from typing import Union
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
import json
import requests
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
        data = request.get_json()
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

class Even(Resource):
    def post(self):
        # print(f'form: {request.form}')
        # print('=' * 100)
        # print(request.form.to_dict(flat=False))
        # print('=' * 100)
        print(request.get_json())
        # print('=' * 100)
        return {'data': request.get_json()}
        # UUID = '840b913a-ce7d-479e-9291-c2eb8df5c292'
        # response = requests.get(f'https://api.evenfinancial.com/originator/rateTables/{UUID}',
        #                         headers={
        #                             'Authorization': f'Bearer {token}'})
        # return {'data': response.json()}, 200


api.add_resource(Accounts, '/accounts')
api.add_resource(Even, '/even')

if __name__ == '__main__':
     app.run(port='5002',debug=True)