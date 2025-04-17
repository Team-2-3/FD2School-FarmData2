describe("Testing Transplanting Report Default Values", () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-barn-kit/transplantingReport')
    
        // Wait here for the maps to load in the page.   
        cy.waitForPage()
    })

    // Adacus Section
    it("Checking if page is correct", () => {
        cy.get('[data-cy=transplant-report-header]')
            .should("have.text", "Transplanting Report")
        cy.get('[data-cy=set-date-legend]')
            .should('exist')
    })

    // Brian Section
    it("Testing default values", () => {
        const today = new Date();
        const currentYear = today.getFullYear();
    
        const pad = (n) => n.toString().padStart(2, '0');
        const todayStr = `${currentYear}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
        const firstDayStr = `${currentYear}-01-01`;
    
        cy.get('[data-cy=start-date-select]')
            .type(firstDayStr);
    
        cy.get('[data-cy=end-date-select]')
            .type(todayStr);
    });
    
    

    it("Checking Button and if the report is not visible.", () => {

    })
})