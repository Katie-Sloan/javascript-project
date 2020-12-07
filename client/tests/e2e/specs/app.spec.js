describe('App', () => {
    beforeEach(() => {
        cy.visit('/', () => {
            console.log("App loaded");
        })
    })

    it('should show selected fruit on clicking fruit in list', () => {
        cy.get('#fruit_select').select('Apple')
        cy.get('#selected_fruit > h2').contains('Apple')
    })
    
});