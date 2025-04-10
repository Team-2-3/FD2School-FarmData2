describe("Testing Transplanting Report Default Values", () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-barn-kit/transplantingReport')
    
        // Wait here for the maps to load in the page.   
        cy.waitForPage()
    })

    it("Checking if page is correct", () => {
        cy.get('[data-cy=transplant-report-header]')
    })

    it("Testing default values", () => {

    })

    it("Checking Button and if the report is not visible.", () => {
        
    })
})