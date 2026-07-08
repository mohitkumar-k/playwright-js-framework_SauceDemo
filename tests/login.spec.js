const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test.describe('Login Tests', () => {

    test('should login successfully with valid credientials', async ({page}) =>{
          const loginPage =new LoginPage(page);

          await loginPage.goto();
          await loginPage.login("standard_user","secret_sauce");

          await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

});