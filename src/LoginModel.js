import 'firebase/auth';
import 'firebase/firestore';

class LoginModel {
    loginInfo = {email: '', password: '', errorMessage: '', show: false, redirect: false};

    setEmail(email){
        this.loginInfo['email'] = email;
    }

    setPassword(password){
        this.loginInfo['password'] = password;
    }

    clearState(){
        this.loginInfo = {email: '', password: '', errorMessage: '', show: false, redirect: false};
    }

    getLoginInfo(){
        return this.loginInfo;
    }
}

export default LoginModel;