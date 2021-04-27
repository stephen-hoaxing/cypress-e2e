/// <reference types="Cypress" />

describe("Testing vhaining", () => {
    it("Should go to codenbox", () =>{
        cy.visit('https://codenboxautomationlab.com/practice')
    })

    it("Should do a chaining", () => {
        cy.get('.page-title').should('be.visible').and('contain', 'Automation Practice')
    })
})