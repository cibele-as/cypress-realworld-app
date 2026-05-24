import LoginPage from "../../pages/loginPage";
import viewTransaction from "../../pages/viewTransactionPage";

const login = new LoginPage();
const viewTransactionPage = new viewTransaction();

describe('View Transaction successfully', () => {

    it('View Transaction succcessfully', () => {
        cy.intercept("GET", "**/transactions").as("getTransactions");

        login.accessLoginPage();
        login.loginWithCredentials();

        viewTransactionPage.viewTransactioncurrentUser();

        cy.wait('@getTransactions').its('response.statusCode').should('eq',200) // wait for the transaction list to come and check the response status

    })

    describe('Try to view the transaction history without any previous transactions', () => {
      it('Should display a message indicating that the user has no previous transactions', () => {
        cy.intercept("GET", "**/transactions").as("getTransactions");

        login.accessLoginPage();
        login.loginWithNewUserCredentials(); // login with a user that has no transactions

        viewTransactionPage.viewTransactionWithoutPreviousTransactions();

        cy.wait('@getTransactions').its('response.statusCode').should('eq',200) // wait for the transaction list to come and check the response status
       
      });
   });

  });
