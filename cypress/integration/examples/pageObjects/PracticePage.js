/// <reference types="Cypress" />

class PracticePage {

    static loadHomePage() {
        cy.visit(`${Cypress.env('url')}/practice`)
        cy.url().should('contain', 'codenbox')
    }
    
    static getTitle() {
        cy.get('.page-title').invoke('text').then(text => expect(text).to.eq('Automation Practice'))
    }

    static getDropdownOption() {
        cy.get('#dropdown-class-example').select('Selenium').should('have.value', 'option1')
    }

    static searchCountry() {
        cy.get('#autocomplete').type('can')
        cy.get('.ui-menu-item').each(($el, index, $list) => {
            if($el.text() === 'Canada') {
                cy.wrap($el).click()
            }
        })
    }

    static clickOnRegForm() {
        cy.get('#menu-item-202').click({force: true})
        cy.get('#menu-item-107').click()
        cy.url().should('include', 'registration')
    }
}

export default PracticePage