describe('Favorite button', () => {
  beforeEach(() => {
    cy.load()
    cy.bookshelf()
  })

  it('Should tell the user if they have not favorited any books yet', () => {
      cy.get('nav > ul > a').eq(1).click()
        .get('.bookType').should('contain', 'You haven\'t favorited any books yet!')
  })

  it('Should add its linked book to the Favorites bookshelf', () => {
    cy.get('.favoritesBtn').eq(0).should('be.visible').click()

    cy.get('nav > ul > a').eq(1).click()

    cy.url().should('eq', 'http://localhost:3000/bookshelf/favorites')
      .get('.bookshelf').should('be.visible')
      .get('.bookCard').should('have.length', 1)
      .get('.bookshelf > article').eq(0).should('contain', 'THE LAST THING HE TOLD ME')
        .should('contain', 'Laura Dave')
        .should('contain', 'Rank: 1')
  })

  it('Should only add a book to Favorites if it has not already been added', () => {
    cy.get('.favoritesBtn').eq(0)
      .click()
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




//add test for unfavoriting a book



})

describe('Favorites display', () => {
  beforeEach(() => {
    cy.load()
    cy.bookshelf()
  })

  it('Should continue to hold current session favorites after returning Home', () => {
    cy.get('.favoritesBtn').eq(0)
      .click()

    cy.get('nav > ul > a').eq(0)
      .click()

    cy.url().should('eq', 'http://localhost:3000/')
      .get('nav > ul > a').eq(1)
      .click()

    cy.url().should('eq', 'http://localhost:3000/bookshelf/favorites')
      .get('.bookshelf').should('be.visible')
      .get('.bookCard').should('have.length', 1)
      .get('.bookshelf > article').eq(0).should('contain', 'THE LAST THING HE TOLD ME')
        .should('contain', 'Laura Dave')
        .should('contain', 'Rank: 1')
  })

})
