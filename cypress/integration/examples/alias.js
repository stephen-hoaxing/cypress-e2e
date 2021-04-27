describe("Testing alias", () => {
    it("Should visit the condenbox site", () => {
        cy.visit("https://codenboxautomationlab.com/wp-login.php")
        // cy.wait(3000)
    })

    it("should enter invalid username", () => {
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('123')
    })

    it("should enter invalid password", () => {
        cy.get('#user_pass').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('123')
    })

    it("should display the error div", () => {
        cy.get('#wp-submit').click()
        cy.get('#login_error').as('error')
        cy.get('@error').should('be.visible').and('contain.text', 'ERROR')
    })
})