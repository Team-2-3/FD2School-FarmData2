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
        //Select "Direct Seedings" from the seeding type dropdown
        cy.get('[data-cy="seeding-type-dropdown"]').click()
        cy.contains('li', 'Direct Seedings').click()

        // Verify the visible columns
        const expectedColumns = [
            'Select',
            'Date',
            'Crop',
            'Area',
            'Seeding',
            'Row Feet',
            'Bed Feet',
            'Rows/Bed',
            'Workers',
            'Hours',
            'Varieties',
            'Comments',
            'User',
            'Edit'
        ]

        // Check each expected column exists in the table header
        expectedColumns.forEach(column => {
            cy.get('th').contains(column).should('be.visible')
        })

        // Verify columns that should NOT be visible for Direct Seedings
        const hiddenColumns = [
            'Seeds',
            'Trays',
            'Cells/Tray'
        ]

        hiddenColumns.forEach(column => {
            cy.get('th').contains(column).should('not.exist')
        })
        
    })

    // Aziz section
    it("Check if the columns values are correct when Tray Seeding is selected", () => {
        
    })

})