const{test, expect} = require('@playwright/test');
const CartPage  = require('../pages/CartPage');
const BasePage = require('../pages/BasePage');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const { loginData } = require('../test-data/login-data');

test.describe("Module -> Cart", ()=>{
    test("Verify a product is added to the cart.", async({page}) =>{
        const basePage  = new BasePage(page);
        const cartPage  = new CartPage(page);
        const loginPage  = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(loginData.validUser.username,loginData.validUser.password);

        await basePage.click(cartPage.cartButton);
        const cartItem = await cartPage.cartItem;
        await expect(cartItem).toBeVisible;

    })

    test("Verify the cart badge count updates.", async ({page})=>{
        const loginPage = new LoginPage(page);
        const cartPage = new CartPage(page);
        const inventoryPage = new InventoryPage(page);
        const badgeCount = inventoryPage.cartBadge;
        await loginPage.loginAndgoToHome();
        await inventoryPage.clickAddToCartButton(1);
        await expect(badgeCount).toHaveText("1");
        await inventoryPage.clickAddToCartButton(2);
        await expect(badgeCount).toHaveText("2");

    })
    test("Verify product details are displayed in the cart.", async({page})=>{
         const loginPage = new LoginPage(page);
        const cartPage = new CartPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.loginAndgoToHome();

        await inventoryPage.clickAddToCartButton(1);
        await cartPage.click(cartPage.cartButton);
        await expect(inventoryPage.itemDescription).toBeVisible();


    })
})