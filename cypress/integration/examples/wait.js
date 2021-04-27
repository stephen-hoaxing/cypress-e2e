/// <reference types="Cypress" />

describe("Test suit for wait", () => {
    it("Test Codenbox Automation page", () => {
        cy.visit("https://codenboxautomationlab.com/practice")
        cy.url().should('include', 'codenbox')
        cy.wait(3000)
    })

    it("Should pause the execution", () => {
        cy.pause()
    })

    it("Should check the correct element on the page", () => {
        cy.get(".page-title").should('be.visible')
    })
})