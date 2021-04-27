/// <reference types="Cypress" />

describe("Testing modals", () => {
    it("Should go to the site", () => {
        cy.visit('https://codenboxautomationlab.com/practice')
    })

    it("Should open and close the modal", () => {
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => expect(str).equal('Hello , share this practice page who love to learn automation'))
    })
})