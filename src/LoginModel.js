import {action, observable} from 'mobx';
import 'firebase/auth';
import 'firebase/firestore';

class LoginModel {
    @observable loginInfo = {email: '', password: '', errorMessage: '', show: false, redirect: false};

    @action setEmail(email){
        this.loginInfo['email'] = email;
    }

    @action setPassword(password){
        this.loginInfo['password'] = password;
    }

    @action clearState(){
        this.loginInfo = {email: '', password: '', errorMessage: '', show: false, redirect: false};
    }

    getLoginInfo(){
        return this.loginInfo;
    }
}

export default LoginModel;