/// <reference types="cypress" />

export class LoginPage {
    open() {
        cy.visit("http://localhost:3000/login")    
    }

    emailField() { return cy.get('[data-testid=email]') }

    passwordField() { return cy.get('[data-testid=password]') }

    loginButton() { return cy.get('#login-button')  }

    errorMessages() { return cy.get("mat-error") }
}
