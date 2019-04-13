import requests

lead = {
  "productTypes": [
    "loan", 
    "savings"
  ], 
  "personalInformation": {
    "firstName": "John", 
    "lastName": "Doe", 
    "email": "john@example.com", 
    "city": "New York", 
    "state": "NY", 
    "workPhone": "2125551234", 
    "primaryPhone": "2125556789", 
    "address1": "45 West 21st Street", 
    "address2": "5th Floor", 
    "zipcode": "10010", 
    "monthsAtAddress": 5, 
    "driversLicenseNumber": "111222333", 
    "driversLicenseState": "NY", 
    "ipAddress": "8.8.8.8", 
    "activeMilitary": False, 
    "militaryVeteran": True, 
    "dateOfBirth": "1993-10-09", 
    "educationLevel": "bachelors", 
    "ssn": "111-22-3333"
  }, 
  "loanInformation": {
    "purpose": "home_refi", 
    "loanAmount": 10000
  }, 
  "mortgageInformation": {
    "propertyType": "condo", 
    "propertyStatus": "own_with_mortgage", 
    "propertyValue": 200000, 
    "mortgageBalance": 10000, 
    "lenderName": "Bank OF NY", 
    "hasFHALoan": True, 
    "currentWithLoan": True
  }, 
  "creditCardInformation": {
    "allowAnnualFee": True, 
    "cardBenefits": [
      "travel_incentives"
    ]
  }, 
  "creditInformation": {
    "providedCreditRating": "excellent", 
    "providedNumericCreditScore": 750
  }, 
  "financialInformation": {
    "employmentStatus": "employed", 
    "employmentPayFrequency": "weekly", 
    "annualIncome": 120000, 
    "monthlyNetIncome": 10000, 
    "bankName": "Santander", 
    "bankRoutingNumber": "231372691", 
    "bankAccountType": "savings", 
    "monthsAtBank": 10, 
    "bankAccountNumber": "1234567890"
  }, 
  "employmentInformation": {
    "employerName": "EVEN Financial", 
    "employerAddress": "45 W 21st St", 
    "employerCity": "New York", 
    "employerState": "NY", 
    "employerZip": "10010", 
    "jobTitle": "Software Engineer", 
    "monthsEmployed": 14, 
    "directDeposit": True, 
    "payDate1": "2004-10-06", 
    "payDate2": "2004-11-06"
  }, 
  "legalInformation": {
    "consentsToFcra": True, 
    "consentsToTcpa": True, 
    "tcpaLanguage": "I agree to be contacted by Even Financial and its partners at the telephone number(s) I have provided above to explore personal loan offers, including contact through automatic dialing systems, artificial or pre-recorded voice messaging, or text message. I understand my consent is not required as a condition to purchasing any goods or services from anyone."
  }, 
  "clientTags": {
    "hello": [
      "world", 
      "there"
    ], 
    "something": [
      "else"
    ]
  }
}
#%%
response = requests.post('https://api.evenfinancial.com/leads/rateTables', 
headers={'Authorization': 'Bearer e7675dd3-ff3b-434b-95aa-70251cc3784b_88140dd4-f13e-4ce3-8322-6eaf2ee9a2d2'},
json=lead)

response.json()
#%%