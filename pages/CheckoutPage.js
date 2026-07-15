const BasePage = require('./BasePage');

class CheckoutPage extends BasePage {
    constructor(page){
        super(page);
        this.buuttonCheckout = page.locator('button[data-test="checkout"]');
        this.firstNameInput = page.locator('input[data-test="firstName"]');
        this.lastNameInput = page.locator('input[data-test="lastName"]');
        this.zipCodeInput = page.locator('input[data-test="postalCode"]');
        this.continueButton = page.locator('input[data-test="continue"]');
        this.finishButton = page.locator('button[data-test="finish"]');
        this.checkoutCompleteHeader = page.locator('.complete-header');


    }
}

module.exports=CheckoutPage;