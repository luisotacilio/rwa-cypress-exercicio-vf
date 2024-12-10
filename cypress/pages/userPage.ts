import { LoginPage } from "../pages/loginPage";

const loginPage = new LoginPage();

export class UserPage {

    // HTML elements
    private urlSignIn = '[data-test="signup"]';
    private inputFirsName = '#firstName';
    private inputLastName = '#lastName';
    private inputUserName = '#username';
    private inputPassword = '#password';
    private inputConfirmPassword = '#confirmPassword'; 
    private buttonSignUp = '[data-test="signup-submit"]';
    private msgErrorConfirmPassword ='#confirmPassword-helper-text';
        
    accessUrlSignIn() {
        cy.get(this.urlSignIn).click();
    }

    fillAnyUser(
        _firstName: string,
        _lastName: string,
        _userName: string,
        _password: string,
        _confirmPassword: string,
    ) {
        cy.get(this.inputFirsName).type(_firstName);
        cy.get(this.inputLastName).type(_lastName);
        cy.get(this.inputUserName).type(_userName);
        cy.get(this.inputPassword).type(_password);
        cy.get(this.inputConfirmPassword).type(_confirmPassword);
        cy.get(this.buttonSignUp).click();
    }

    fillAnyUserWithError(
        _firstName: string,
        _lastName: string,
        _userName: string,
        _password: string,
        _confirmPassword: string,
    ) {
        cy.get(this.inputFirsName).type(_firstName);
        cy.get(this.inputLastName).type(_lastName);
        cy.get(this.inputUserName).type(_userName);
        cy.get(this.inputPassword).type(_password);
        cy.get(this.inputConfirmPassword).type(_confirmPassword);
    }


    checkIncludeNewUser(_userName: string, _password: string) {
        loginPage.lauchAplication();
        loginPage.loginWithAnyUser(_userName, _password);
        loginPage.checkAccessValid();
    }

    checkInvalidConfirmPassword() {
        cy.get(this.msgErrorConfirmPassword);
    }

}