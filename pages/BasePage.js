class BasePage {
    constructor(page){
        this.page =page;
    }

    async click(locator){
        await locator.click();
    }
    async fill(locator,value){
        await locator.fill(value);
    }

}

module.exports =BasePage;