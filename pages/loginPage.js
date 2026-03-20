class LoginPage {
  selectorsList() {
    const selectors = {
      usernameField: '[name="username"]',
      passwordField: '[name="password"]',
      loginButton: '[data-test="signin-submit"]',
      wrongCredentialsError: '[data-test="signin-error"]',
      emptyFieldError: 'input[aria-invalid="true"]',
    };

    return selectors;
  }

  accessLoginPage() {
    cy.visit("http://localhost:3000/signin");
  }

  //Check login success credentials

  loginWithCredentials(username, password) {
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().loginButton).click();
  }
  // Check wrong credentials error
  checkWrongCredentialsError() {
    cy.get(this.selectorsList().wrongCredentialsError).should("be.visible");
  }

  //Check empty fields error
  checkEmptyFieldsError() {
    cy.get(this.selectorsList().loginButton).click();
    cy.get(this.selectorsList().emptyFieldError).should("be.visible");
  }
}

export default LoginPage; // export default LoginpAGE
