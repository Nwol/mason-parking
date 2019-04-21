import React, {Component} from "react";
import LoginView from './LoginView';
import firebase from './firebase'

class LoginController extends Component{
    state = {
        email: '', 
        password: '', 
        errorMessage: '', 
        show: false, 
        redirect: false
    }

    onEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    onPasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!(this.state.email.includes('@'))){
            let currentState = this.state;
            currentState.errorMessage = "Invalid Email";
            currentState.show = true;
            this.setState(currentState);
            return;
        }
        if(!(this.state.email.includes('@gmu.edu') || this.state.email.includes('@masonlive.gmu.edu'))){
            let currentState = this.state;
            currentState.errorMessage = "You need a mason email in order to register/login for this service";
            currentState.show = true;
            this.setState(currentState);
            return;
        }
        firebase.auth.createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(success => {
            let currentState = this.state;
            currentState.redirect = true;
            this.setState(currentState);
        })
        .catch(error => {
            firebase.auth.signInWithEmailAndPassword(this.state.email, this.state.password).then(success => {
                let currentState = this.state;
                currentState.redirect = true;
                this.setState(currentState);
            })
            .catch(error2 => {
                let currentState = this.state;
                currentState.errorMessage = "Error " + error2.message;
                currentState.show = true;
                this.setState(currentState);
            });
        });
    }

    render() {
        return (
            <LoginView
                email={this.state.email}
                password={this.state.password}
                errorMessage={this.state.errorMessage}
                show={this.state.show}
                redirect={this.state.redirect}
                handleSubmit={this.onSubmit}
                handleEmailChange={this.onEmailChange}
                handlePasswordChange={this.onPasswordChange}
            />
        )
    }
}

export default LoginController;