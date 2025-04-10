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

    // Checks whether the btn has the right text
    it("Checking if the generate-rpt-btn button has 'Generate Report' text", () => {
        cy.get('[data-cy=generate-rpt-btn]')
          .should('have.text', 'Generate Report')
    })

    
    // Checks whether the the report is visible
    it("Check if the error remainder is not visible", () => {
        cy.get('[data-cy=report-remainder]').should('not.be.visible')
    })
})