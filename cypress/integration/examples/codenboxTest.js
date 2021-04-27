/// <reference types="Cypress" />
import PracticePage from './pageObjects/PracticePage'

describe("Test Practice Page", () => {

    before(() => PracticePage.loadHomePage())

    it("Should display the title", () => {
        PracticePage.getTitle()
    })

    it("Should select Selenium from the dropdown", () => {
        PracticePage.getDropdownOption()
    })

    it("Should select Canada from the dropdown", () => {
        PracticePage.searchCountry()
    })

    it("Should go to Registration", () => {
        PracticePage.clickOnRegForm()
    })

})