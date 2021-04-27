/// <reference types="Cypress" />

describe("Testing assertions", () => {
    it("Should visit the page", () => {
        cy.visit("https://codenboxautomationlab.com/practice")
        cy.url().should('include', 'codenbox')
    })

    it("Should check the correct element on the page", () => {
        cy.get('.page-title').should('be.visible')
    })

    it("Should assertion with length property example", () => {
        cy.get('.search-input').should('have.length', 2)
    })

    it("Should Open window button have text Open Window", () => {
        cy.get('#openwindow').should('have.text', 'Open Window')
    })
})