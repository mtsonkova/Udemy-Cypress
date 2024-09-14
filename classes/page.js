class Page {
    constructor(page) {
        this.page = page;
         
    }

    //re-usable methods
    navigateToUrl(url) {
        console.log(`Navigating to the given url: ${url}`);
        //TODO - implement the actual step
        //example of code
        this.page.gotourl(url);
    }

    clickOnElement(element) {
        console.log(`Element ${element} clicked`);
        element.click();
    }

}

module.exports = Page;