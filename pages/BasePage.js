class BasePage {
    constructor(page){
        this.page =page;
    }

    async click(locator){
        await locator.click();
    }

}

module.exports =BasePage;