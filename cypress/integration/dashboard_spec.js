describe('Details', () => {
    beforeEach(() => {
      cy.load()
    });
    it('Should show NavBar', () => {
      cy.get('h2').should('be.visible')
        .get('h2').contains('Loading...')
        .get('.nav').should('be.visible')
        .get('.nav>h1').contains('BookWorm')
        .get('.nav>ul>li').should('be.visible')
        .get('.nav>ul>li').eq(0).should('contain', 'Home')
        .get('.nav>ul>li').eq(1).should('contain', 'Favorites')
        .get('.nav').contains('Home')
        .get('.nav').contains('Favorites')
        .get('h2').should('not.exist')
    })
  
    it('Should show list of book types', () => {
      cy.get('h2').should('be.visible')
        .get('h2').contains('Loading...')
        .get('ul').should('be.visible')
        .get('ul>li').eq(1)
        .get('.listItem').should('be.visible')
        .get('.listItem').eq(0).should('contain', 'Combined Print & E-Book Fiction')
        .get('.listItem').eq(1).should('contain', 'Combined Print & E-Book Nonfiction')
        .get('h2').should('not.exist')
    })
});
  