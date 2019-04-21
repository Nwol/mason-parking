import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';

class LoginView extends Component {
    render() {
        const {
            errorMessage,
            show,
            redirect,
            handleSubmit,
            handleEmailChange,
            handlePasswordChange
        } = this.props;

        if (redirect) {
            return <Redirect to={"/"} />
        }
        return (
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Mason Email:</Form.Label>
                        <Form.Control name="email" placeholder="Enter email" onChange={handleEmailChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={handlePasswordChange} />
                    </Form.Group>
                    {show && <Alert variant="danger">{errorMessage}</Alert>}
                    <Button variant="primary" type={"submit"}>Log in(or register)</Button>
                </Form>
            </div>
        )
    }
}

export default LoginView;
