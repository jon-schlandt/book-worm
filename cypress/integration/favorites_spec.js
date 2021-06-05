describe('Favorite button', () => {
  beforeEach(() => {
    cy.load()
    cy.bookshelf()
  })

  it('Should tell the user if they have not favorited any books yet', () => {
      cy.get('.nav-links > li > a').eq(1).click()
        .get('.bookType').should('contain', 'You haven\'t favorited any books yet!')
  })

  it('Should add its linked book to the Favorites bookshelf', () => {
    cy.get('.favoritesBtn').eq(0).should('be.visible').click()

    cy.get('.nav-links > li > a').eq(1).click()

    cy.url().should('eq', 'http://localhost:3000/bookshelf/favorites')
      .get('.bookshelf').should('be.visible')
      .get('.bookCard').should('have.length', 1)
      .get('.bookshelf > article').eq(0).should('contain', 'THE LAST THING HE TOLD ME')
        .should('contain', 'Laura Dave')
        .should('contain', 'Rank: 1')
  })

  it('Should delete a book from Favorites if the user clicks the remove from favorites button', () => {
    cy.get('.favoritesBtn').eq(0).click()
      .get('.favoritesBtn').eq(0).should('contain', 'Remove from Favorites')
      .get('.favoritesBtn').eq(0).click()

      .get('.nav-links > li > a').eq(1).click()

      .url().should('eq', 'http://localhost:3000/bookshelf/favorites')
      .get('.bookType').should('be.visible')
      .get('.bookType').should('contain', 'You haven\'t favorited any books yet!')
  })

})

describe('Favorites display', () => {
  beforeEach(() => {
    cy.load()
    cy.bookshelf()
  })

  it('Should continue to hold current session favorites after returning Home', () => {
    cy.get('.favoritesBtn').eq(0).click()
      .get('.nav-links > li > a').eq(1).click()

      .url().should('eq', 'http://localhost:3000/bookshelf/favorites')
      .get('.bookshelf').should('be.visible')
      .get('.bookCard').should('have.length', 1)
      .get('.bookshelf > article').eq(0).should('contain', 'THE LAST THING HE TOLD ME')
        .should('contain', 'Laura Dave')
        .should('contain', 'Rank: 1')

      .get('.nav-links > li > a').eq(0).click()

      .url().should('eq', 'http://localhost:3000/')
      .get('.nav-links > li > a').eq(1).click()

      .url().should('eq', 'http://localhost:3000/bookshelf/favorites')
      .get('.bookshelf').should('be.visible')
      .get('.bookCard').should('have.length', 1)
      .get('.bookshelf > article').eq(0).should('contain', 'THE LAST THING HE TOLD ME')
        .should('contain', 'Laura Dave')
        .should('contain', 'Rank: 1')
  })

})
