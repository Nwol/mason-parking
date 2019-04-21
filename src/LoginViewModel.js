import LoginModel from './LoginModel';

class LoginViewModel{
    constructor(loginInfo){
        this.LoginModel.loginInfo = loginInfo;
    }

    getLoginInfo(){
        return this.LoginModel.getLoginInfo();
    }

    setEmail(email){
        this.LoginModel.setEmail(email);
    }

    setPassword(password){
        this.LoginModel.setPassword(password);
    }
}

export default LoginViewModel;