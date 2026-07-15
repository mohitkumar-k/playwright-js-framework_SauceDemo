const base = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const BasePage = require('../pages/BasePage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
exports.test = base.test.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
    inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);

  },
  basePage: async({page},use) =>{
    const basePage = new BasePage(page);
    await use(basePage);
  },
  cartPage: async({page}, use)=>{
    const cartPage = new CartPage(page);
    await use (cartPage);
  },
  checkoutPage: async({page}, use)=>{
    const checkoutPage = new CheckoutPage(page);
    await use (checkoutPage);
  }
});

