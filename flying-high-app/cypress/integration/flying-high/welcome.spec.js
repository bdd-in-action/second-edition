/// <reference types="cypress" />

import { MenuBar } from '../pageobjects/MenuBar'
import { WelcomePage } from '../pageobjects/WelcomePage'

const welcomePage = new WelcomePage()
const menuBar = new MenuBar()

context('On the welcome page', () => {
    beforeEach(() => {
        welcomePage.open()
    })

    describe('visitors should be welcomed to the application', () => {
        it('should show a welcome message', () => {
            welcomePage.welcomeMessage().should('be.visible')
                .should('have.text', 'Welcome to Flying High')
        })
    })

    describe('visitors should be able to login or register', () => {
        it('should show the login link', () => {
            welcomePage.loginLink().should('be.visible')
        })
        it('should show the register link', () => {
            welcomePage.registerLink().should('be.visible')
        })
    })

    describe('the menu bar', () => {
        it('should contain a login button', () => {
            menuBar.loginButton().should('be.visible').should('be.enabled')
        })
        it('should contain a register button', () => {
            menuBar.registerButton().should('be.visible').should('be.enabled')
        })
    })
})