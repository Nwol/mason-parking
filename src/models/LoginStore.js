import LoginModel from '../LoginModel'

class LoginStore {
    static type = {
        LOGIN_MODEL: 'loginModel'
    }

    constructor(){
        this.loginModel = new LoginModel()
    }

    getStores = () => ({
        [LoginStore.type.LoginModel]: this.loginModel
    })
}

export default LoginStore;