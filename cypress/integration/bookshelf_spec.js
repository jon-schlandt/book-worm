describe('BookshelfDisplay', () => {
  beforeEach( () => {
    cy.bookshelf()
  })

  it('Should display the navbar', () => {
    cy.get('.nav').should('be.visible')
  })
})
