/// <reference types="Cypress" />

describe("Testing open new tab in browser", () => {
    it("Should visit the page", () => {
        cy.visit('https://codenboxautomationlab.com/practice')
    })

    it("Should simulate open new tab", () => {
        cy.get('#opentab').invoke('removeAttr', 'target').click()
    })
})