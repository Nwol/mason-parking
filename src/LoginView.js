import React, {Component} from "react";
import {Form, Alert, Button} from "react-bootstrap";
import {Redirect} from "react-router-dom";

class LoginView extends Component {
    render() {
        const {
            email,
            password,
            errorMessage,
            show,
            redirect,
            handleSubmit,
            handleEmailChange,
            handlePasswordChange
        } = this.props;
    
        if(redirect){
            return <Redirect to={"/"}/>
        }
        return (
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>Mason Email:</Form.Label>{' '}
                    <Form.Control name="email" placeholder="Email" onChange={handleEmailChange}/>
                    <Form.Label>Password:</Form.Label>{' '}
                    <Form.Control type="password" name="password" onChange={handlePasswordChange}/>
                    {show && <Alert bsStyle="danger">{errorMessage}</Alert>}
                    <Button variant="primary" type={"submit"}>Log in(or register)</Button>
                </Form>
            </div>
        )
    }
}

export default LoginView;
