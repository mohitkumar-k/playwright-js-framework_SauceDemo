const {tests, expect} = require('@playwright/test');
const { test } = require('../fixture/pages.fixture');


test.describe("Test Cases for Checkout Information", ()=>{
    test("Verify successful checkout with valid information",async({loginPage,inventoryPage,basePage,cartPage,checkoutPage})=>{

        await loginPage.loginAndgoToHome();
        console.log(await checkoutPage.page.url());
        await inventoryPage.clickAddToCartButton(1);
        console.log(await checkoutPage.page.url());
        await basePage.click(cartPage.cartButton);
        console.log(await checkoutPage.page.url());
        await basePage.click(checkoutPage.buuttonCheckout);
        console.log(await checkoutPage.page.url());
        await basePage.fill(checkoutPage.firstNameInput,"Mohit");
        console.log(await checkoutPage.page.url());
        await basePage.fill(checkoutPage.lastNameInput,"Kumar");
        console.log(await checkoutPage.page.url());
        await basePage.fill(checkoutPage.zipCodeInput,"201304");
        console.log(await checkoutPage.page.url());
        await basePage.click(checkoutPage.continueButton);
        console.log(await checkoutPage.page.url());

        await basePage.click(checkoutPage.finishButton);

        await expect(checkoutPage.checkoutCompleteHeader).toHaveText("Thank you for your order!");

   



    })
})