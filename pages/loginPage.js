import { sign } from "crypto";

class LoginPage {
  selectorsList() {
    const selectors = {
      usernameField: '[name="username"]',
      passwordField: '[name="password"]',
      loginButton: '[data-test="signin-submit"]',
      dashboard: '[data-test="main"]',
      wrongCredentialsError: '[data-test="signin-error"]',
      emptyFieldError: 'input[aria-invalid="true"]',
      getStartModal: '[data-test="user-onboarding-dialog-content"]',
      signupLink: '[data-test="signup"]',
      signupForm: '[data-test="signup-title"]',
    };

    return selectors;
  }

  beforeEach() {
     cy.clearCookies();
     cy.clearLocalStorage();
  };
  
  accessLoginPage() {
    cy.visit("http://localhost:3003/signin");
  }
  
 // Check login success credentials
  loginWithCredentials(username, password) {
     //expect(username, "username não pode estar vazio").to.not.be.empty;
    //expect(password, "password não pode estar vazio").to.not.be.empty;

    cy.get(this.selectorsList().usernameField).type("carla1234");
    cy.get(this.selectorsList().passwordField).type("12345");
    cy.get(this.selectorsList().loginButton).click();

  }
   checkLoginSuccess() {
    cy.get(this.selectorsList().getStartModal).should("be.visible");
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


  // Add new user with valid credentials
  addNewUser(firstName, lastname, username, password, confirmPassword) {
        cy.get(this.selectorsList().signupLink).click();
        cy.get (this.selectorsList().signupForm).should("be.visible");
        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type(lastname);
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('#confirmPassword').type(confirmPassword);
        cy.get('[data-test="signup-submit"]').click();

      }
      
}

export default LoginPage; // export default LoginpAGE
