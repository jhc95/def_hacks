
# Account errors
class AccountError(Exception):
    pass

class AccountDoesNotExist(AccountError):
    pass

class AccountAlreadyExist(AccountError):
    pass

class AccountInvalidPassword(AccountError):
    pass
