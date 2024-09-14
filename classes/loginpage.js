const Page = require('./page');

class LoginPage extends Page{
    constructor(){
        super();

    }

    get signInButton() {
        return this.signInButton;
    }

    clickSignInBtn() {
        this.signInButton.click();
    }

    clickLoginBtn(loginBtn) {
        console.log(`Login btn clicked`)
        this.clickOnElement(loginBtn);
    }
}

let loginPage = new LoginPage(page);
loginPage.clickLoginBtn(loginBtn);
loginPage.navigateToUrl('google.com')