const BasePage = require ('./BasePage');

class InventoryPage {
    constructor(page){


        this.pageTitle = page.locator('span[data-test="title"]');
        this.sortButton = page.locator('select[class="product_sort_container"]');
        this.addToCartButton =page.locator('button[id="add-to-cart-sauce-labs-backpack"]');
        this.product =page.locator('div[data-test="inventory-item"]');

        this.productName =page.locator('div[data-test="inventory-item-name"]');
        this.productPricce = page.locator('div[data-test="inventory-item-price"]');
        this.removeButton = page.locator('button[data-test="remove-sauce-labs-backpack"]');
        this.cartBadge   = page.locator('span[data-test="shopping-cart-badge"]');

        this.productDetailPage  = page.locator('div[id="inventory_item_container"]');
        this.backButton= page.locator('#back-to-products');


    }

    async getProductsCount(){
        return this.product.count();
    }

    async getProductTitle(){
        return this.productName;
    }

    async clickAddToCartButton(){
        await this.addToCartButton.click();
    }

    async getRemoveButtonText(){
        return this.removeButton;
    }

    async getBadgeCount(){
        return this.cartBadge;
    }

    async clickProduct(){
        await this.productName.nth(1).click();
    }

    async clickBackButton(){
        await this.backButton.click();
    }

    async getProductdetailPage(){
        return this.productDetailPage;
    }

    


    


}
module.exports= (InventoryPage);