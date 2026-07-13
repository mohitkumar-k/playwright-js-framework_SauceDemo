const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
import {loginData} from '../test-data/login-data.js'

test.describe('Login Tests', () => {

    test('should login successfully with valid credientials', async ({page}) =>{
          const loginPage =new LoginPage(page);

          await loginPage.goto();
          await loginPage.login(loginData.validUser.username,loginData.validUser.password);

          await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test("should not logged in With invalid password", async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();

        await loginPage.login(loginData.invalidPassword.username,loginData.invalidPassword.password);

        await expect(page.locator('[data-test="error"]')).toHaveText(
             "Epic sadface: Username and password do not match any user in this service");


    });
    test("Both Fields Empaty", async ({page}) =>{
        const loginPage = new LoginPage(page);
        await loginPage.goto();

        await loginPage.login("","");
        await expect(page.locator('[data-test="error"]')).toHaveText(
             "Epic sadface: Username is required");

    })
    test("Test Locked User",async ({page}) =>{
        const loginPage = new LoginPage(page);
        await loginPage.goto();

        await loginPage.login(loginData.lockedUser.username,loginData.lockedUser.password);
        await expect(page.locator('[data-test="error"]')).toHaveText(
            "Epic sadface: Sorry, this user has been locked out.")
    })

});