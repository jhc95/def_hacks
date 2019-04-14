import React from "react";
// import { Link } from "react-router-dom";
// import constants from "./Constants";

export default class SignUpView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: undefined,
            email: "",
            password: ""
        }
    }

    componentDidMount() {
        // check
        // this.authUnsub = firebase.auth().onAuthStateChanged(user => {
        //     this.setState({authenticated: user != null});
        // });
    }

    componentWillUnmount() {
        this.authUnsub();
    }

    handleSubmit(evt) {
        evt.preventDefault();
        // handle unique displayName

        if (this.state.displayName === undefined) {
            this.setState({ errorMessage: "please enter a display name" });
        } else {
            this.setState({ working: true, errorMessage: undefined });
            // firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
            //     .then(user => user.updateProfile({
            //         displayName: this.state.displayName
            //     }))
            //     .catch(err => this.setState({errorMessage: err.message}))
            //     .then(() => this.setState({working: false}));   
            //     firebase.auth().onAuthStateChanged(user => {
            //         if (user) {
            //             this.props.history.push("mainpage");  
            //         }
            //     }); 
        }
    }

    render() {
        return (
            <div className="container">
                <div className="signup">
                    <h1><font color="orange">Welcome to Trivial!</font></h1>
                    <h3>Please sign up</h3>
                    {
                        this.state.errorMessage &&
                        <p className="alert alert-danger">{this.state.errorMessage}</p>
                    }
                    <form>
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
