class SendMoneyPage {
    selectorsList() {
        const selectors = {
            newTransferButton: '[data-test="nav-top-new-transaction"]',
            amountInput: '[data-cy="amount-input"]',
            recipientInput: '[data-cy="recipient-input"]',
            userSearchList: '[data-test="user-list-item-uBmeaz5pX"]',
            amount: '[data-test="transaction-create-amount-input"]',
            descriptionTransfer: '[data-test="transaction-create-description-input"]',
            sendTransferButton: '[data-test="transaction-create-submit-payment"]',
            userSearchInsufficientAmount: '[data-test="user-list-item-_XblMqbuoP"]',
        };
        return selectors;
    }

       sendMoney() {

        cy.get(this.selectorsList().newTransferButton).click(); //Click on new transfer button
        cy.get(this.selectorsList().userSearchList).click(); //select recipient from the user list 
        cy.get(this.selectorsList().amount).type('50'); // Enter the amount to send
        cy.get(this.selectorsList().descriptionTransfer).type('Test transfer'); //Add a note to the transfer
        cy.get(this.selectorsList().sendTransferButton).click(); // Click on send transfer button
       }

       sendMoneyWithInsufficientAmount () {
    
        cy.get(this.selectorsList().newTransferButton).click(); // Click on new transfer button
        cy.get(this.selectorsList().userSearchInsufficientAmount).click(); // select recipient from the user list with insufficient amount
        cy.get(this.selectorsList().amount).type('1000'); // Enter the amount to send
        cy.get(this.selectorsList().descriptionTransfer).type('Test transfer insufficient amount'); // Add a note to the transfer
        cy.get(this.selectorsList().sendTransferButton).click(); // Click on send transfer button 

        // Warning: This is a bug in the application, the app allows to send money even with insufficient amount, 

    }
}

export default SendMoneyPage; // export default SendMoneyPage


