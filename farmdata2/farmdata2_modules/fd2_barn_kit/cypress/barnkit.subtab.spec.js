describe("Test for BarnKit Sub-Tabs", () => {
    beforeEach(() => {

    })

    // Adacus Section
    it("The BarnKit tab contains sub-tabs", () => {

    })
    // Brian Section
    it("The order of the tabs are correct", () => {

    })
    // Aziz Section
    it("The number of sub-tabs are correct", () => {
        cy.get('ul.tabs--secondary.pagination li a')
          .should('have.length', 3);
    })
})