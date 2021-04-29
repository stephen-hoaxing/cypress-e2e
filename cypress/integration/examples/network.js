/// <reference types="Cypress" />

describe("Testing the network", () => {
    it("Should make the request", () => {
        cy.request('https://jsonplaceholder.cypress.io/comments').then(response => expect(response.status).to.eq(200))
    })

    it("Should make the request with intercept()", () => {
        cy.intercept('GET', 'https://www.python.org/').as('interception')
        cy.visit('https://www.python.org/')
        cy.wait('@interception').then(({request, response}) => expect(response.statusCode).to.eq(200))
    })
    
    it("Should search pycon on the official Python page", () => {
        cy.intercept('GET', '**/search/*').as('interception')
        cy.get('#id-search-field').type('pycon')
        cy.get('#submit').click()
        cy.wait('@interception').then(({request, response}) => expect(response.statusCode).to.equal(200))
    })
})