/// <reference types="Cypress" />

describe("Testing tables", () => {
    it("Should visit the practice", () => {
        cy.goToPracticePage()
    })

    it("Should get the correct price for the Webservices", () => {
        cy.get('#product > tbody > tr > td:nth-child(2)').each(($el, index, $list) => {
            if ($el.text().includes("WebServices")) {
                cy.get('#product > tbody > tr > td:nth-child(3)').eq(index).then(price => {
                    expect(price.text().trim()).to.equal('30')
                })
            }
        })
    })
})
