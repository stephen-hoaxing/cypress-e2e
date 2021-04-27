/// <reference types="Cypress" />

describe("My First Test", () => {
    it("Visits Codenbox Automation Site", () => {
        cy.visit("https://codenboxautomationlab.com/practice")
        cy.get('input[value="radio2"]').check().should('be.checked')
        cy.get('#search-2 > #searchform > .search-input').type('automation').should('have.value', 'automation')
        cy.get('#search-2 > #searchform > .search-submit').click()
        cy.get('.section-header > h1').should('have.text', 'Search results for: automation')
    })
})