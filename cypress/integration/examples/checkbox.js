/// <reference types="Cypress" />

describe("My Checkbox Test Suite", () => {
    it("Checkbox test", () => {
        cy.visit('https://codenboxautomationlab.com/practice')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').check(['option1', 'option2']).should('be.checked')
    })
})