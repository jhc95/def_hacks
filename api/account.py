import json
from exceptions import (AccountError, AccountAlreadyExist, 
                        AccountDoesNotExist, AccountInvalidPassword)

account_path = 'accounts.json'
class Account():

    def __init__(self, username: str, info: dict) -> None:
        self.username = username
        self.info = info

    @classmethod
    def create_account(cls, username: str, password: str, info: dict) -> None:
        accounts = json.load(open(account_path, 'r'))
        if username in accounts:
            raise AccountAlreadyExist()
        accounts[username] = {'password': password, 'information': info}
        json.dump(accounts, open(account_path, 'w'), indent=4)

    @classmethod
    def load_account(cls, username: str, password: str) -> 'Account':
        accounts = json.load(open(account_path, 'r'))
        if username not in accounts:
            raise AccountDoesNotExist()
        if password != accounts[username]['password']:
            raise AccountInvalidPassword()
        return cls(username, accounts[username]['information'])
