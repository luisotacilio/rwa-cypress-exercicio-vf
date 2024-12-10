import { LoginPage } from "../pages/loginPage";
import { NotificationPage } from "../pages/notificationPage";

const loginPage = new LoginPage();
const notificationPage = new NotificationPage();

describe('Functional Tests Real Wourld App - Notation', () => {
    beforeEach(() => {
        loginPage.lauchAplication();
        loginPage.loginWithAnyUser("Heath93","s3cret");
    });

    it('List all notifications of a user', () => {
        notificationPage.listAllNotificantionOfUser();
        cy.screenshot('Notification of user');
    });

    it('List notifications of a date', () => {
       notificationPage. listNotificationOfDate();
       cy.screenshot('Notification of date');
    });

});

