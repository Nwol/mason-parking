class LoginViewModel{
    constructor(loginStore){
        this.store = loginStore;
    }

    getLoginInfo(){
        return this.store.getLoginInfo();
    }

    setEmail(email){
        this.store.setEmail(email);
    }

    setPassword(password){
        this.store.setPassword(password);
    }
}

export default LoginViewModel;