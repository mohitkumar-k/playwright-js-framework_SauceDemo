const {test, expect } = require('@playwright/test');
const InventoryPage = require('../pages/InventoryPage');
const LoginPage   = require ('../pages/LoginPage');
const { loginData } = require('../test-data/login-data');
const { log } = require('node:console');

test.describe("Validation of Inventory Page", ()=>{
    test("Validate that Inventory Page is Opened After Login", async ({page})=>{
        const inverntoryPage = new InventoryPage(page);
        const loginPage   = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(loginData.validUser.username,loginData.validUser.password);
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    })

    test("Verify all products are displayed", async({page})=>{
        const inventoryPage = new InventoryPage(page);
        const loginPage   = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(loginData.validUser.username,loginData.validUser.password);
        const productCount = await inventoryPage.getProductsCount();
        expect (productCount).toBe(6);


    })

    test("Verify every product has required information", async ({page})=>{
       const inventoryPage = new InventoryPage(page);
        const loginPage   = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(loginData.validUser.username,loginData.validUser.password);

        const productCount = await inventoryPage.getProductsCount();
        const productName = await inventoryPage.getProductTitle();
        for(let i=0;i< productCount;i++){
            await expect(productName.nth(i)).toBeVisible();
        }

    })
    test("Verify Add to Cart functionality", async ({page})=>{
        const inventoryPage = new InventoryPage(page);
        const loginPage   = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(loginData.validUser.username,loginData.validUser.password);
        await inventoryPage.clickAddToCartButton();
        const removeButton = await inventoryPage.getRemoveButtonText();
        const cartBadge = await inventoryPage.getBadgeCount();
        await expect(removeButton).toHaveText("Remove");
        await expect(cartBadge).toHaveText("1");

    })

    test("Verify product details page navigation", async({page})=>{
        const inventoryPage = new InventoryPage(page);
        const loginPage   = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(loginData.validUser.username,loginData.validUser.password);

        await inventoryPage.clickProduct();

        const productDetailPage = await inventoryPage.getProductdetailPage();
        await expect(productDetailPage).toBeVisible;

        await inventoryPage.clickBackButton();

        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    })



})