import { add } from "lodash";
import LoginPage from "../../pages/loginPage";

const login = new LoginPage();

describe("RealWorld App", () => {
  it.only("Login Successfully", () => {
    // adjust the pattern to match your app's login endpoint (inspect in DevTools Network)
    cy.intercept("POST", "**/login").as("loginRequest");

    login.accessLoginPage();
    login.loginWithCredentials("carla1234", "12345");

    // wait for dashboard to load after login
    cy.wait('@loginRequest').its('response.statusCode').should('eq',200)

    window.location.href.includes("dashboard").should("be.true");

  });

  it("Login Unsuccessfully", () => {
    login.accessLoginPage();
    login.loginWithCredentials("admin", "1234");
    login.checkWrongCredentialsError();
   
  });

  it.only("Login with empty fields", () => {
    login.accessLoginPage();
    login.checkEmptyFieldsError();
  });

  it.only('Add new user with valid credentials', () => {
    login.accessLoginPage();

    // adjust the pattern to match your app's login endpoint (inspect in DevTools Network)
    cy.intercept("POST", "**/users").as("createUser");
    
    // Add random user to avoid conflicts with existing users in the database

    const randomSuffix = Math.floor(Math.random() * 10000);
    const username = `user${randomSuffix}`;
    const password = `pass${randomSuffix}`;

    login.addNewUser('Rosa', 'Costa', username, password, password);

    // wait for dashboard to load after login
    cy.wait('@createUser').its('response.statusCode').should('eq',201)

    login.accessLoginPage();
    login.loginWithCredentials(username, password);
    login.checkLoginSuccess();


  });


});
