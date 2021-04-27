/// <reference types="Cypress" />

import RegistrationPage from './pageObjects/RegistrationPage'

describe("Testing the registration page", () => {

    before(() => RegistrationPage.loadPage())

    it("Should complete the registration", () => {
        RegistrationPage.getFirstName('Nidal')
        RegistrationPage.getLastName('Chalhoub')
        RegistrationPage.getEmail('nidal.chalhoub@gmail.com')
        RegistrationPage.selectDropdown()
        RegistrationPage.selectRadioButton()
    })

})