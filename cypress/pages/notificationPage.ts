export class NotificationPage {

        // HTML elements
        private itemMenuMine = "[data-test='nav-personal-tab']";
        private txtUrl = "http://localhost:3000/personal";
        private iconNotification = "[data-testid='NotificationsIcon']";
        private buttonDate = "[data-test='transaction-list-filter-date-range-button'] > .MuiChip-label";
        private inputDate = ".Cal__Header__wrapper";
        private inputToday = ".Cal__Day__today > span";

    listAllNotificantionOfUser() {
        cy.get(this.itemMenuMine).click();
        cy.screenshot("Notations");
        cy.url().should('eq', 'http://localhost:3000/personal');
    }

    listNotificationOfDate() {
        cy.get(this.itemMenuMine).click();
        cy.get(this.buttonDate).click({ force: true });
        cy.get(this.inputToday).click({ force: true });
        cy.get(this.inputToday).click({ force: true });
        
    }

}