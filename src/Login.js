import React,{Component} from 'react';
import { inject } from 'mobx-react';
import LoginController from './LoginController';
import LoginViewModel from './LoginViewModel';
import LoginStore from './models/LoginStore';


@inject(LoginStore.type.LOGIN_MODEL)
class Login extends Component {
    constructor(props){
        super(props)
        const loginModel = props[LoginStore.type.LOGIN_MODEL]
        this.viewModel = new LoginViewModel(loginModel);
    }
    render() {
        return (
            <LoginController viewModel={this.viewModel}/>
        )
    }
}

export default Login;
