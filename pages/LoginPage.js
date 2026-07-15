const { loginData } = require('../test-data/login-data');
const BasePage  = require('./BasePage');

class LoginPage extends BasePage {
    constructor(page){
        super(page);

        this.username =page.locator('#user-name');
        this.password =page.locator('#password');
        this.loginButton = page.locator('#login-button');

    }

    async goto(){
        await this.page.goto("https://www.saucedemo.com")
    }

    async login(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click()
    }
    async loginAndgoToHome(){
        await this.goto();
        await this.login(loginData.validUser.username,loginData.validUser.password);
    }

}

module.exports =LoginPage;