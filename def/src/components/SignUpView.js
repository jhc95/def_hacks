import React from "react";


export default class SignUpView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: undefined,
            email: "",
            password: "",
            dict: []
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        this.authUnsub();
    }

    handleSubmit(evt) {
        evt.preventDefault();
        var info = JSON.stringify({
            "first": this.state.first,
            "last": this.state.last,
            "email": this.state.email,
            "city": this.state.city,
            "state": this.state.state,
            "workPhone": this.state.workPhone,
            "primaryPhone": this.state.primaryPhone,
            "address1": this.state.address1,
            "address2": this.state.address2,
            "zipcode": this.state.zipcode,
            "monthsAtAddress": this.state.monthsAtAddress,
            "driversLicenseNumber": this.state.driversLicenseNumber,
            "driversLicenseState": this.state.driversLicenseState,
            "ipAddress": this.state.ipAddress,
            "activeMilitary": this.state.activeMilitary,
            "militaryVeteran": this.state.militaryVeteran,
            "dateOfBirth": this.state.dateOfBirth,
            "educationLevel": this.state.educationLevel,
            "ssn": this.state.ssn,
            "purpose": this.state.ssn,
            "loanAmount": this.state.loanAmount,
            "employmentStatus": this.state.employmentStatus,
            "employmentPayFrequency": this.state.employmentPayFrequency,
            "annualIncome": this.state.annualIncome,
            "monthlyNetIncome": this.state.monthlyNetIncome,
            "bankName": this.state.bankName,
            "bankRoutingNumber": this.state.bankRoutingNumber,
            "bankAccountType": this.state.bankAccountType,
            "monthsAtBank": this.state.monthsAtBank,
            "bankAccountNumber": this.state.bankAccountNumber
        })
        // localStorage.setItem("email", this.state.email)
        // localStorage.setItem("password", this.state.password)
        // localStorage.setItem("info", info)
        const token = 'e7675dd3-ff3b-434b-95aa-70251cc3784b_88140dd4-f13e-4ce3-8322-6eaf2ee9a2d2'
        // save user info to database
        fetch('https://api.evenfinancial.com/originator/rateTables/840b913a-ce7d-479e-9291-c2eb8df5c292', {
            method: 'POST',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json"
            },
            body: info,
            // ,mode: "no-cors"
        }).then(function(response) {
            console.log(response.json());
        });
        // go to sign in page
        window.location = "http://localhost:3000/signin"
    }

    render() {
        return (
            <div className="container">
                <div className="signup">
                    <h1><font color="orange">Welcome to Loanly Friend!</font></h1>
                    <h3>Please sign up</h3>
                    {
                        this.state.errorMessage &&
                        <p className="alert alert-danger">{this.state.errorMessage}</p>
                    }
                    <form>
                        <h5>Personal Information</h5>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="first">First Name:</label>
                                <input id="first" type="text" className="form-control"
                                    placeholder="Enter your First Name"
                                    value={this.state.first}
                                    onInput={evt => this.setState({ first: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="last">Last Name:</label>
                                <input id="last" type="text" className="form-control"
                                    placeholder="Enter your Last Name"
                                    value={this.state.last}
                                    onInput={evt => this.setState({ last: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="city">City:</label>
                                <input id="city" type="text" className="form-control"
                                    placeholder="Enter your City"
                                    value={this.state.city}
                                    onInput={evt => this.setState({ city: evt.target.value })}
                                />
                            </div>
                        </div>
                        {this.state.email === "" ? (
                                                <div className="alert alert-danger mt-2">
                                                    Email is required
                                                </div>
                                            ) : (
                                                undefined
                                            )}
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="Email">Email:</label>
                                <input id="email" type="email" className="form-control"
                                    placeholder="Enter your Email"
                                    value={this.state.email}
                                    onInput={evt => this.setState({ email: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="state">State:</label>
                                <input id="state" type="text" className="form-control"
                                    placeholder="Enter your State"
                                    value={this.state.state}
                                    onInput={evt => this.setState({ state: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="workPhone">WorkPhone:</label>
                                <input id="workPhone" type="text" className="form-control"
                                    placeholder="Enter your workPhone"
                                    value={this.state.workPhone}
                                    onInput={evt => this.setState({ workPhone: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="primaryPhone">PrimaryPhone:</label>
                                <input id="primaryPhone" type="text" className="form-control"
                                    placeholder="Enter your primaryPhone"
                                    value={this.state.primaryPhone}
                                    onInput={evt => this.setState({ primaryPhone: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="address1">Address1:</label>
                                <input id="address1" type="text" className="form-control"
                                    placeholder="Enter your address1"
                                    value={this.state.address1}
                                    onInput={evt => this.setState({ address1: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="address2">Address2:</label>
                                <input id="address2" type="text" className="form-control"
                                    placeholder="Enter your address2"
                                    value={this.state.address2}
                                    onInput={evt => this.setState({ address2: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="zipcode">Zip code:</label>
                                <input id="zipcode" type="text" className="form-control"
                                    placeholder="Enter your zipcode"
                                    value={this.state.zipcode}
                                    onInput={evt => this.setState({ zipcode: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="monthsAtAddress">monthsAtAddress:</label>
                                <input id="monthsAtAddress" type="text" className="form-control"
                                    placeholder="Enter your monthsAtAddress"
                                    value={this.state.monthsAtAddress}
                                    onInput={evt => this.setState({ monthsAtAddress: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="driversLicenseNumber">driversLicenseNumber:</label>
                                <input id="driversLicenseNumber" type="text" className="form-control"
                                    placeholder="Enter your driversLicenseNumber"
                                    value={this.state.driversLicenseNumber}
                                    onInput={evt => this.setState({ driversLicenseNumber: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="driversLicenseState">driversLicenseState:</label>
                                <input id="driversLicenseState" type="text" className="form-control"
                                    placeholder="Enter your driversLicenseState"
                                    value={this.state.driversLicenseState}
                                    onInput={evt => this.setState({ driversLicenseState: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="ipAddress">ipAddress:</label>
                                <input id="ipAddress" type="text" className="form-control"
                                    placeholder="Enter your ipAddress"
                                    value={this.state.ipAddress}
                                    onInput={evt => this.setState({ ipAddress: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="activeMilitary">activeMilitary:</label>
                                <input id="activeMilitary" type="text" className="form-control"
                                    placeholder="Enter your activeMilitary"
                                    value={this.state.activeMilitary}
                                    onInput={evt => this.setState({ activeMilitary: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="militaryVeteran">militaryVeteran:</label>
                                <input id="militaryVeteran" type="text" className="form-control"
                                    placeholder="Enter your militaryVeteran"
                                    value={this.state.militaryVeteran}
                                    onInput={evt => this.setState({ militaryVeteran: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="dateOfBirth">dateOfBirth:</label>
                                <input id="dateOfBirth" type="text" className="form-control"
                                    placeholder="Enter your dateOfBirth"
                                    value={this.state.dateOfBirth}
                                    onInput={evt => this.setState({ dateOfBirth: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="educationLevel">educationLevel:</label>
                                <input id="educationLevel" type="text" className="form-control"
                                    placeholder="Enter your educationLevel"
                                    value={this.state.educationLevel}
                                    onInput={evt => this.setState({ educationLevel: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="ssn">ssn:</label>
                                <input id="ssn" type="text" className="form-control"
                                    placeholder="Enter your ssn"
                                    value={this.state.ssn}
                                    onInput={evt => this.setState({ ssn: evt.target.value })}
                                />
                            </div>
                        </div>

                        <h5>Loan Information</h5>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="purpose">purpose:</label>
                                <input id="purpose" type="text" className="form-control"
                                    placeholder="Enter your purpose"
                                    value={this.state.purpose}
                                    onInput={evt => this.setState({ purpose: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="loanAmount">loanAmount:</label>
                                <input id="loanAmount" type="text" className="form-control"
                                    placeholder="Enter your loanAmount"
                                    value={this.state.loanAmount}
                                    onInput={evt => this.setState({ loanAmount: evt.target.value })}
                                />
                            </div>
                        </div>
                        {/* </div> */}


                        {/* <div className="financialInformation"> */}
                        <h5>Financial Information</h5>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="employmentStatus">employmentStatus:</label>
                                <input id="employmentStatus" type="text" className="form-control"
                                    placeholder="Enter your employmentStatus"
                                    value={this.state.employmentStatus}
                                    onInput={evt => this.setState({ employmentStatus: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="employmentPayFrequency">employment Pay Frequency:</label>
                                <input id="employmentPayFrequency" type="text" className="form-control"
                                    placeholder="Enter your employmentPayFrequency"
                                    value={this.state.employmentPayFrequency}
                                    onInput={evt => this.setState({ employmentPayFrequency: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="annualIncome">annual Income:</label>
                                <input id="annualIncome" type="text" className="form-control"
                                    placeholder="Enter your annualIncome"
                                    value={this.state.annualIncome}
                                    onInput={evt => this.setState({ annualIncome: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="monthlyNetIncome">monthly Net Income:</label>
                                <input id="monthlyNetIncome" type="text" className="form-control"
                                    placeholder="Enter your monthlyNetIncome"
                                    value={this.state.monthlyNetIncome}
                                    onInput={evt => this.setState({ monthlyNetIncome: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="bankName">bank Name:</label>
                                <input id="bankName" type="text" className="form-control"
                                    placeholder="Enter your bankName"
                                    value={this.state.bankName}
                                    onInput={evt => this.setState({ bankName: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="bankRoutingNumber">bank Routing Number:</label>
                                <input id="bankRoutingNumber" type="text" className="form-control"
                                    placeholder="Enter your bankRoutingNumber"
                                    value={this.state.bankRoutingNumber}
                                    onInput={evt => this.setState({ bankRoutingNumber: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="bankAccountType">bank Account Type:</label>
                                <input id="bankAccountType" type="text" className="form-control"
                                    placeholder="Enter your bankAccountType"
                                    value={this.state.bankAccountType}
                                    onInput={evt => this.setState({ bankAccountType: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="monthsAtBank">months At Bank:</label>
                                <input id="monthsAtBank" type="text" className="form-control"
                                    placeholder="Enter your monthsAtBank"
                                    value={this.state.monthsAtBank}
                                    onInput={evt => this.setState({ monthsAtBank: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="bankAccountNumber">bank Account Number:</label>
                                <input id="bankAccountNumber" type="text" className="form-control"
                                    placeholder="Enter your bankAccountNumber"
                                    value={this.state.bankAccountNumber}
                                    onInput={evt => this.setState({ bankAccountNumber: evt.target.value })}
                                />
                            </div>
                        </div>


                        <h5>Employment Information</h5>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="employerName">employer Name:</label>
                                <input id="employerName" type="text" className="form-control"
                                    placeholder="Enter your employerName"
                                    value={this.state.employerName}
                                    onInput={evt => this.setState({ employerName: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="employerAddress">employer Address:</label>
                                <input id="employerAddress" type="text" className="form-control"
                                    placeholder="Enter your employerAddress"
                                    value={this.state.employerAddress}
                                    onInput={evt => this.setState({ employerAddress: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="employerCity">employer City:</label>
                                <input id="employerCity" type="text" className="form-control"
                                    placeholder="Enter your employerCity"
                                    value={this.state.employerCity}
                                    onInput={evt => this.setState({ employerCity: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="employerState">employer State:</label>
                                <input id="employerState" type="text" className="form-control"
                                    placeholder="Enter your employerState"
                                    value={this.state.employerState}
                                    onInput={evt => this.setState({ employerState: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="employerZip">employer Zip:</label>
                                <input id="employerZip" type="text" className="form-control"
                                    placeholder="Enter your employerZip"
                                    value={this.state.employerZip}
                                    onInput={evt => this.setState({ employerZip: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="jobTitle">job Title:</label>
                                <input id="jobTitle" type="text" className="form-control"
                                    placeholder="Enter your jobTitle"
                                    value={this.state.jobTitle}
                                    onInput={evt => this.setState({ jobTitle: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="monthsEmployed">months Employed:</label>
                                <input id="monthsEmployed" type="text" className="form-control"
                                    placeholder="Enter your monthsEmployed"
                                    value={this.state.monthsEmployed}
                                    onInput={evt => this.setState({ monthsEmployed: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="directDeposit">direct Deposit:</label>
                                <input id="directDeposit" type="text" className="form-control"
                                    placeholder="Enter your directDeposit"
                                    value={this.state.directDeposit}
                                    onInput={evt => this.setState({ directDeposit: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="payDate1">pay Date1:</label>
                                <input id="payDate1" type="text" className="form-control"
                                    placeholder="Enter your payDate1"
                                    value={this.state.payDate1}
                                    onInput={evt => this.setState({ payDate1: evt.target.value })}
                                />
                            </div>
                        </div>                      
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="payDate2">pay Date2:</label>
                                <input id="payDate2" type="text" className="form-control"
                                    placeholder="Enter your payDate2"
                                    value={this.state.payDate2}
                                    onInput={evt => this.setState({ payDate2: evt.target.value })}
                                />
                            </div>
                        </div>
                        {this.state.password === "" ? (
                                                <div className="alert alert-danger mt-2">
                                                    Password is required
                                                </div>
                                            ) : (
                                                undefined
                                            )}
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <label htmlFor="Password">Password:</label>
                                <input id="passWord" type="password" className="form-control"
                                    placeholder="Enter your password"
                                    value={this.state.password}
                                    onInput={evt => this.setState({ password: evt.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="form-group col-md-4">
                                <button type="button" className="btn btn-info" onClick={e => this.handleSubmit(e)}>Sign Up!</button>
                            </div>
                        </div>
                    </form>
                    {/* <p>Already have an account? <Link to={constants.routes.signin}>Sign In!</Link></p> */}
                </div>
            </div>
        );
    }
}
