describe('BookshelfDisplay', () => {
  beforeEach( () => {
    cy.load()
    cy.bookshelf()
  })

  it('Should display the navbar', () => {
    cy.get('.nav').should('be.visible').should('contain', 'BookWorm')
    .get('.nav-links').should('contain', 'Home')
    .get('.nav-links').should('contain', 'Favorites')
  })

  
})
