/// <reference types="Cypress" />

describe("Testing the dropdown", () => {
    it("Should visit the condenbox automation page", () => {
        cy.visit('https://codenboxautomationlab.com/practice')
        cy.get('#dropdown-class-example').select('Selenium').should('have.value', 'option1')
    })

    it("Should traverse the items of the dynamic select", () => {
        cy.get('#autocomplete').type('can')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() === 'Canada') {
                cy.wrap($el).click()
            }
        })
    })
})