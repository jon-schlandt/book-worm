describe('Home Page', () => {
    beforeEach(() => {
      cy.load()
    });
    it('Should show NavBar', () => {
      cy.get('.nav').should('be.visible')
        .get('.nav > h1').contains('BookWorm')
        .get('.nav-links').should('be.visible')
        .get('.nav-links > a').eq(0).should('contain', 'Home')
        .get('.nav-links > a').eq(1).should('contain', 'Favorites')
        .get('.nav').contains('Home')
        .get('.nav').contains('Favorites')
    })

    it('Should show list of book types', () => {
      cy.get('.loading-msg').contains('Loading...')
        .get('.listTitle > h2').should('be.visible')
        .get('.listTitle > h2').should('be.visible')
        .get('.list-container').should('be.visible')
        .get('.listItem').should('be.visible')
        .get('.listItem').eq(0).should('contain', 'Combined Print & E-Book Fiction')
        .get('.listItem').eq(1).should('contain', 'Combined Print & E-Book Nonfiction')
        .get('.loadingMsg').should('not.exist')
    })

    it('Should not display the list of book types when a list item is clicked', () => {
      cy.get('.listItem').eq(0).click()
        .get('.list-container').should('not.exist')
        .get('.nav').should('be.visible')
    })


      //it should show an error if the fetch returns nothing
});
