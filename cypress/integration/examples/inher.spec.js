/// <reference types="Cypress" />

class BasePage {
    static loadHomePage() {
        cy.visit('https://codenboxautomationlab.com/')
    }

    static wait(num) {
        cy.wait(num)
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.contains("Contact Us").scrollIntoView()
    }

    static scrollToTop() {
        cy.get('.block-editor-rich-text__editable > span').scrollIntoView()
    }
}

describe("Testing OOP", () => {
    before(() => {
        HomePage.loadHomePage()
    })

    after(() => {
        cy.clearCookies()
    })

    it("Should scroll to the bottom and to the top", () => {
        HomePage.scrollToBottom()
        HomePage.wait(3000)
        HomePage.scrollToTop()
    })
})