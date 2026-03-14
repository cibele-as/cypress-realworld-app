import LoginPage from '../../pages/loginPage'

const login = new LoginPage()

describe('RealWorld App', () => {
    it.only('Login Successfully', () => {
      // adjust the pattern to match your app's login endpoint (inspect in DevTools Network)
         cy.intercept('POST', '**/login').as('loginRequest')

        login.accessLoginPage()
        login.loginWithCredentials('admin01', 'test1234')

        // wait for dashboard to load after login
      //  cy.wait('@loginRequest').its('response.statusCode').should('eq',200)

    })


    it.only('Login Unsuccessfully', () => {
        login.accessLoginPage()
        login.loginWithCredentials('admin', '1234')
        login.checkWrongCredentialsError()     

    })

    it.only('Login with empty fields', () => {
        login.accessLoginPage()
        login.checkEmptyFieldsError() 
        
    })
 })
