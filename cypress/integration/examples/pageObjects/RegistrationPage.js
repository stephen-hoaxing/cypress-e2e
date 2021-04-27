/// <reference types="Cypress" />

class RegistrationPage {

    static loadPage() {
        cy.visit(`${Cypress.env('url')}/registration-form`)
    }

    static getFirstName(firstName) {
        cy.get('#nf-field-17').type(firstName, {delay: 30}).should('have.value', firstName)
    }

    static getLastName(lastName) {
        cy.get('#nf-field-18').type(lastName, {delay: 30}).should('have.value', lastName)
    }

    static getEmail(email) {
        cy.get('#nf-field-19').type(email, {delay: 30}).should('have.value', email)
    }

    static selectDropdown() {
        cy.get('#nf-field-22').select('Selenium Automation').should('have.value', 'selenium-automation')
    }

    static selectRadioButton() {
        cy.get('#nf-field-23-1').click({force: true}).should('have.value', 'linkedin')
    }

}

export default RegistrationPage