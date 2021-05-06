/// <reference types="cypress" />

const MENU_BAR = '.operation-section'

export class MenuBar {

    loginButton() {
        return cy.get(MENU_BAR)
                 .contains('button','Login')
    }

    registerButton() {
        return cy.get(MENU_BAR)
                 .contains('button','Register')
    }
}
