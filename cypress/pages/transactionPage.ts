export class TransactionPage {

    // HTML elements
    private buttonNew = "[data-test='nav-top-new-transaction']";
    private firstItemListUsers = "[data-test='user-list-item-GjWovtg2hr']";
    private inputAmount = "input[name='amount']";
    private inputDescribeNotifcation = "input[name='description']";
    private buttonRequest = "[data-test='transaction-create-submit-request']";
    private buttonPay = "[data-test='transaction-create-submit-payment']";
    private genericSideMenuItem = ".MuiListItemText-primary";
    private textLogo = ".NavBar-logo";
    private messageText = ":nth-child(2) > .MuiGrid-container > .MuiGrid-root > .MuiTypography-root";

    
    accessUrlNewTransaction() {
        cy.get(this.buttonNew).click();
    }

    selecItemListUser() {
        cy.get(this.firstItemListUsers).click();
    }

    fillPayment(_value: string, _description: string) {

        cy.get(this.inputAmount).type(_value);
        cy.get(this.inputDescribeNotifcation).type(_description);
        cy.get(this.buttonPay).click();
       
    }

    checkValidTransaction() {
        cy.get(this.messageText).should("contain", 'Paid $1,500.00 for Payment test')
    }

    checkInvalidTransaction(){
        cy.get(this.messageText).should("contain", "Invalid Payment: insuficient balance")      
    }



}