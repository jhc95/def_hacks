import React, { Component } from 'react';
import './App.css';
import constants from './components/Constants';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpView from './components/SignUpView';
import SignInView from './components/SignIn';
import Offer from './components/Offer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dict: []
    };
  }

  componentDidMount() {
  }


  componentWillUnmount() {
  }

  handleSignUp() {
    this.setState({ working: true, errorMessge: undefined });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // redirects to sign in page
    window.location.href = "http://localhost:3000/signin";
  }

  render() {

    return (

      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1"><font color="orange">Loanly Friend</font></span>
        </nav>
        <div className="container">
          {
            this.state.errorMessage ? <div className="alert alert-danger">{this.state.errorMessage}</div> :
              undefined
          }
          <span>{this.state.working ? "working on it !" : undefined}</span>
          <Router>
            <Switch>
              <Route exact path={constants.routes.signin} component={SignInView} />
              <Route path={constants.routes.signup} component={SignUpView} />
              <Route path={constants.routes.offer} component={Offer} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }

}

export default App;
