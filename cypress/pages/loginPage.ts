export class LoginPage {
    
    // HTML elements
    private inputUserName = "[data-test='signin-username']";
    private inputPassword = "[data-test='signin-password']";
    private buttonLogin = "[data-test='signin-submit']";
    private messageInTitle = ":nth-child(1) > .MuiTypography-subtitle2";
    private messageError = "[data-test='signin-error']";   


    lauchAplication() {
        cy.visit('http://localhost:3000/signin/');
    }

    loginWithAnyUser(_userName: string, _password: string) {
        cy.get(this.inputUserName).type(_userName);
        cy.get(this.inputPassword).type(_password);
        cy.get(this.buttonLogin).click();
    }

    checkAccessInvalid() {
        cy.get(this.messageError);
    }
    checkAccessValid() {
        cy.get(this.messageInTitle);
    }

}