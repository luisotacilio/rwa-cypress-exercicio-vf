import { LoginPage } from "../pages/loginPage";

const loginPage = new LoginPage();

describe('Functional Tests Real Wourld App - Login', () => {
  beforeEach(() => {
    loginPage.lauchAplication();
  });
  it('Login with valid credentials', () => {
    loginPage.loginWithAnyUser('Heath93', 's3cret');
    loginPage.checkAccessValid();
    cy.screenshot('Login');

  });
  it('Login with invalid credentials', () => {
    loginPage.loginWithAnyUser('teste', 's3cret');
    loginPage.checkAccessInvalid();
    cy.screenshot('Login invalid');

  });

})