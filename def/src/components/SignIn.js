import React from "react";
import constants from './Constants';
import { Link } from "react-router-dom";


export default class SignInView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated:false,
            email: "",
            password: ""
        };
    }
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.setState({working: true, errorMessage: undefined});
        // check authentication
        // localStorage.getItem("email")
        // load offer page
    }    

    render() {
        return (
            <div className = "container">
                <div className = "signin">
                <header>
                    <h1><font color = "orange">Welcome to Loanly Friend!</font></h1>
                    <h3>Please sign in</h3>
                </header>
                {
                    this.state.errorMessage &&
                    <p className = "alert alert-danger">{this.state.errorMessage}</p>
                }
                <form onSubmit = {evt => this.handleSubmit(evt)}>
                    <div className = "row">
                        <div className = "col-md-4"></div>
                        <div className = "form-group col-md-4 emailentry">
                            <label htmlFor = "email">Email:</label>
                            <input id = "email" type = "email" className = "form-control"
                                placeholder = "enter your email address"
                                value = {this.state.email}
                                onInput = {evt => this.setState({ email: evt.target.value })} />
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col-md-4"></div>
                        <div className = "form-group col-md-4 ">
                            <label htmlFor = "password">Password:</label>
                            <input id = "password" type = "password" className = "form-control"
                                placeholder = "enter your password"
                                value={this.state.password}
                                onInput={evt => this.setState({ password: evt.target.value })} />
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col-md-4"></div>
                        <div className = "form-group col-md-4">
                            <button type = "submit" className = "btn btn-info" onClick = {e => this.handleSubmit(e)}>Sign In</button>
                        </div>
                    </div>
                </form>
                <p>Don't have an account yet? <Link to = {constants.routes.signup}>Sign Up!</Link></p>
                </div>
            </div>
        );
    }
}
