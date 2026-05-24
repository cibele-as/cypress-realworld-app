import { access } from "fs";
import SendMoneyPage from "../../pages/sendMoneyPage";
import LoginPage from "../../pages/loginPage";

const loginPage = new LoginPage();
const sendMoney = new SendMoneyPage();

describe('Send Money with sufficient amount', () => {
    it('Send money successfully', () => {

     cy.intercept("POST", "**/transactions").as("createTransaction");

        loginPage.accessLoginPage(); // Access the login page
        loginPage.loginWithCredentials(); // Login before sending money

       sendMoney.sendMoney(); // call the send money function to the transfer
    
        cy.wait('@createTransaction').its('response.statusCode').should('eq',200) // wait for the transaction be created and check the response status
       

    });

    describe('Send Money with insufficient amount', () => {
        it('Show error message for insufficient amount ', () => {
            cy.intercept("POST", "**/transactions").as("createTransaction");
            
            loginPage.accessLoginPage();
            loginPage.loginWithCredentials();

            sendMoney.sendMoneyWithInsufficientAmount(); // call the send money function to the transfer with insufficient amount
        });
    });
})
