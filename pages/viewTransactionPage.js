class viewTransaction {
  selectorsList() { 
    const selectors = {
          mineTransactionButton: '[data-test="nav-personal-tab"]',
          transactionList: '[data-test="main"]',
          noTransactionsMessage: '[data-test="empty-list-header"]',
    }
      return selectors;
      
    };
   
    viewTransactioncurrentUser() {
        cy.get(this.selectorsList().mineTransactionButton).click(); // Click on mine transaction button
        cy.get(this.selectorsList().transactionList).should("be.visible"); // check if the transaction list is avaliable and visible
    
    }

    viewTransactionWithoutPreviousTransactions() {
      cy.get(this.selectorsList().mineTransactionButton).click(); // Click on mine transaction button
      cy.get(this.selectorsList().noTransactionsMessage).should("be.visible"); // check the message indicating that the usaer has no previous transactions


  }
}
  export default viewTransaction; // export default viewTransaction