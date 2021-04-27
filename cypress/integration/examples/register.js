/// <reference types="Cypress" />

describe("Test for registration", () => {
    it('Should navigate to page', () => {
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#menu-item-202').click({force: true})
        cy.get('#menu-item-107').click()    
    })
})