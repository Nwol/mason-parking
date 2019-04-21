import React, {Component} from "react";
import LoginView from './LoginView';

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
        firebase.auth.createuserWithEmailAndPassword(this.state.email,this.state.email.password)
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