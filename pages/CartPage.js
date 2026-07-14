const BasePage = require('../pages/BasePage');

class CartPage extends BasePage{
    constructor(page){
        super(page);
        this.cartButton = page.locator('a[data-test="shopping-cart-link"]');
        this.cartItem  = page.locator('div[class="cart_item"]');


    }


}
module.exports =CartPage;