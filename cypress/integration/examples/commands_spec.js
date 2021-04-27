/// <reference types="Cypress" />

describe("Testing commands", () => {
    it("Should go to page", () => {
        cy.visit('https://codenboxautomationlab.com/wp-login.php')
    })

    it("Should log in", () => {
        cy.login('123', '123')
        cy.get("#login_error").should('contain.text', 'ERROR')
    })
})