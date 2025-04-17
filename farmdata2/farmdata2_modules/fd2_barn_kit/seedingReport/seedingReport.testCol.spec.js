describe("Testing Transplanting Report Default Values", () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-barn-kit/seedingReport')
    
        // Wait here for the maps to load in the page.   
        cy.waitForPage()
    })

    // Adacus section
    it("Check if the columns values are correct when All is selected", () => {
        
    })

    // Brian section
    it("Check if the columns values are correct when Direct Seedings is selected", () => {
        
    })

    // Aziz section
    it("Check if the columns values are correct when Tray Seeding is selected", () => {
        
    })

})