/// <reference types="cypress"/>

import { LoginPage } from "../pageobjects/LoginPage"
import { SearchPage } from "../pageobjects/SearchPage"
import { personas } from "../testdata/personas"

const loginPage = new LoginPage()
const searchPage= new SearchPage()

beforeEach( () => {
    loginPage.open()
})

context('When trying to login on', () => {
    it('should open the search page when the credentials are valid', () => {
        loginPage.emailField().type(personas.amy.email)
        loginPage.passwordField().type(personas.amy.password)
        loginPage.loginButton().click();

        searchPage.pageHeading().should('have.text','Where do you want to go today?')
    })

    it('should report a warning message if the email is missing', () => {
        loginPage.passwordField().type(personas.amy.password)
        loginPage.loginButton().click();
        
        loginPage.errorMessages().should('have.text','Please enter your email')

    })

    it('should report a warning message if the password is missing', () => {
        loginPage.emailField().type(personas.amy.email)
        loginPage.loginButton().click();
        
        loginPage.errorMessages().should('have.text','Please enter your password')

    })

})

