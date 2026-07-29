const {tests, expect} = require('@playwright/test');
const { test } = require('../fixture/pages.fixture');


test.describe("Test Cases for Checkout Information", ()=>{
    test("Verify successful checkout with valid information",async({loginPage,inventoryPage,basePage,cartPage,checkoutPage})=>{

        await loginPage.loginAndgoToHome();
        await inventoryPage.clickAddToCartButton(1);

        await basePage.click(cartPage.cartButton);

        await basePage.click(checkoutPage.buuttonCheckout);
        await basePage.fill(checkoutPage.firstNameInput,"Mohit");
        await basePage.fill(checkoutPage.lastNameInput,"Kumar");
        await basePage.fill(checkoutPage.zipCodeInput,"201304");
        await basePage.click(checkoutPage.continueButton);

        await basePage.click(checkoutPage.finishButton);

        await expect(checkoutPage.checkoutCompleteHeader).toHaveText("Thank you for your order!");

    })
    test('verify chekout When First Name is Empaty', async ({page,loginPage,inventoryPage,basePage,cartPage,checkoutPage})=>{
        await loginPage.loginAndgoToHome();
        await inventoryPage.clickAddToCartButton(1);
        await basePage.click(cartPage.cartButton);
        await basePage.click(checkoutPage.buuttonCheckout);
         await basePage.fill(checkoutPage.firstNameInput,"");
        await basePage.fill(checkoutPage.lastNameInput,"Kumar");
        await basePage.fill(checkoutPage.zipCodeInput,"201304");
        await basePage.click(checkoutPage.continueButton);

        await expect(checkoutPage.errorArea).toHaveText("Error: First Name is required");



    })

    test('Verify checkout fails when Last Name is left blank.', async({page,loginPage,inventoryPage,basePage,cartPage,checkoutPage})=>{
        await loginPage.loginAndgoToHome();
        await loginPage.loginAndgoToHome();
        await inventoryPage.clickAddToCartButton(1);
        await basePage.click(cartPage.cartButton);
        await basePage.click(checkoutPage.buuttonCheckout);
         await basePage.fill(checkoutPage.firstNameInput,"Mohit");
        await basePage.fill(checkoutPage.lastNameInput,"");
        await basePage.fill(checkoutPage.zipCodeInput,"201304");
        await basePage.click(checkoutPage.continueButton);

        await expect(checkoutPage.errorArea).toBeVisible();


    })
    test('Verify checkout fails when Postal Code is left blank.', async({page,loginPage,inventoryPage,basePage,cartPage,checkoutPage})=>{
        await loginPage.loginAndgoToHome();
        await loginPage.loginAndgoToHome();
        await inventoryPage.clickAddToCartButton(1);
        await basePage.click(cartPage.cartButton);
        await basePage.click(checkoutPage.buuttonCheckout);
         await basePage.fill(checkoutPage.firstNameInput,"Mohit");
        await basePage.fill(checkoutPage.lastNameInput,"Kumar");
        await basePage.fill(checkoutPage.zipCodeInput,"");
        await basePage.click(checkoutPage.continueButton);

        await expect(checkoutPage.errorButton).toBeVisible();


    })
    test('Verify user can cancel checkout and is redirected back to the Cart page.', async({page,loginPage,inventoryPage,basePage,cartPage,checkoutPage})=>{
        await loginPage.loginAndgoToHome();
        await loginPage.loginAndgoToHome();
        await inventoryPage.clickAddToCartButton(1);
        await basePage.click(cartPage.cartButton);
        await basePage.click(checkoutPage.buuttonCheckout);
         await basePage.fill(checkoutPage.firstNameInput,"Mohit");
        await basePage.fill(checkoutPage.lastNameInput,"Kumar");
        await basePage.fill(checkoutPage.zipCodeInput,"201304");
        await basePage.click(checkoutPage.cancelButton);

        await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");


    })

    

})