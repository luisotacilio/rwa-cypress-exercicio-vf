import { LoginPage } from "../pages/loginPage";
import { TransactionPage } from "../pages/transactionPage";

const loginPage = new LoginPage();
const transactionPage = new TransactionPage();

describe('Functional Tests Real Wourld App - Transaction', () => {
    beforeEach(() => {
        loginPage.lauchAplication();
        loginPage.loginWithAnyUser("Heath93", "s3cret");
        transactionPage.accessUrlNewTransaction();
        transactionPage.selecItemListUser();
    });

    it('Send money with suficient balance', () => {
        transactionPage.fillPayment('1500', 'Payment test');
        transactionPage.checkValidTransaction();
        cy.screenshot('Transaction send money with success')
    });

    it('Send money with insuficient balance', () => {
        transactionPage.fillPayment('1500', 'Payment test');
        transactionPage.checkInvalidTransaction();
        cy.screenshot('Transaction send money with fail - insuficient balance')

    });

});

