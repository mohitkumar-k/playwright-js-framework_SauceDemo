const BasePage = require ('./BasePage');

class InventoryPage {
    constructor(page){


        this.pageTitle = page.locator('span[data-test="title"]');
        this.sortButton = page.locator('select[class="product_sort_container"]');
        this.addToCartButton =page.locator('button[class="btn btn_primary btn_small btn_inventory "]');
        this.product =page.locator('div[data-test="inventory-item"]');

        this.productName =page.locator('div[data-test="inventory-item-name"]');
        this.productPricce = page.locator('div[data-test="inventory-item-price"]');
        this.removeButton = page.locator('button[data-test="remove-sauce-labs-backpack"]');
        this.cartBadge   = page.locator('span[data-test="shopping-cart-badge"]');

        this.productDetailPage  = page.locator('div[id="inventory_item_container"]');
        this.backButton= page.locator('#back-to-products');

        this.itemDescription = page.locator('div[data-test="inventory-item-desc"]');


    }

    async getProductsCount(){
        return this.product.count();
    }

    async getProductTitle(){
        return this.productName;
    }

    async clickAddToCartButton(index){
        await this.addToCartButton.nth(index).click();
    }

    async getRemoveButtonText(){
        return this.removeButton;
    }

    async getBadgeCount(){
        return this.cartBadge;
    }

    async clickProduct(){
        await this.productName.click();
    }

    async clickBackButton(){
        await this.backButton.click();
    }

    async getProductdetailPage(){
        return this.productDetailPage;
    }

    


    


}
module.exports= (InventoryPage);