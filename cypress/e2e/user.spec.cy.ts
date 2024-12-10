import { LoginPage } from "../pages/loginPage";
import { UserPage } from "../pages/userPage";

const loginPage = new LoginPage();
const userPage = new UserPage();

describe('Functional Tests Real Wourld App - User ', () => {
  beforeEach(() => {
    loginPage.lauchAplication();
  });
  it('Insert new User - success', () => {
    userPage.accessUrlSignIn();
    userPage.fillAnyUser(
      "Pedro",
      "Silva",
      "pedrosilva",
      "s3cret",
      "s3cret",
    )
    loginPage.loginWithAnyUser('pedrosilva', 's3cret');
    loginPage.checkAccessValid();
  });

  it('Update  new User with incomplet informations - fail', () => {
    userPage.accessUrlSignIn();
    userPage.fillAnyUserWithError(
      "Eduardo",
      "Silva",
      "eduardosilva",
      "s3cret",
      "secret",
    )
    cy.screenshot('Insert new user with fail');
    userPage.checkInvalidConfirmPassword();

  });

})