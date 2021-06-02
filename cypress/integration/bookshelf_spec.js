describe('BookshelfDisplay', () => {
  beforeEach( () => {
    cy.load()
    cy.bookshelf()
  })

  it('Should display the navbar', () => {
    cy.get('.nav').should('be.visible')
      .get('nav > h1').should('contain', 'BookWorm')
      .get('nav > ul > a').eq(0).should('contain', 'Home')
      .get('nav > ul > a').should('contain', 'Favorites')
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

  it('Should include the queryName in the URL', () => {
     cy.url().should('eq', 'http://localhost:3000/bookshelf/combined-print-and-e-book-fiction')
  })

})

describe('Favorite button', () => {
  beforeEach(() => {
    cy.load()
    cy.bookshelf()
  })

  it('should add its linked book to the Favorites bookshelf', () => {
    cy.get('.favoritesBtn').eq(0).should('be.visible')
      .click()
    
    cy.get('nav > ul > a').eq(1)
      .click()

    cy.url().should('eq', 'http://localhost:3000/bookshelf/favorites')
      .get('.bookshelf').should('be.visible')
      .get('.bookCard').should('have.length', 1)
      .get('.bookshelf > article').eq(0).should('contain', 'THE LAST THING HE TOLD ME')
        .should('contain', 'Laura Dave')
        .should('contain', 'Rank: 1')
  })

  it('should only add a book to Favorites if it has not already been added', () => {
    cy.get('.favoritesBtn').eq(0).should('be.visible')
      .click()
      .click()

    cy.get('nav > ul > a').eq(1)
      .click()

    cy.url().should('eq', 'http://localhost:3000/bookshelf/favorites')
      .get('.bookshelf').should('be.visible')
      .get('.bookCard').should('have.length', 1)
  })
})
