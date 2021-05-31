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

  it('Should display bookcards based on a genre', () => {
    cy.get('.bookshelf').should('be.visible')
      .get('.bookCard').should('have.length', 2)
      .get('.bookshelf > article').eq(0).should('contain', 'THE LAST THING HE TOLD ME')
        .should('contain', 'Laura Dave')
        .should('contain', 'Rank: 1')
      .get('.bookshelf > article').eq(1).should('contain', 'SOOLEY')
        .should('contain', 'John Grisham')
        .should('contain', 'Rank: 2')
  })

})
