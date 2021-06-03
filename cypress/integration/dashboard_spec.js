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
        .get('.listItem').eq(0).should('be.visible').should('contain', 'Combined Print & E-Book Fiction')
        .get('.listItem').eq(1).should('be.visible').should('contain', 'Combined Print & E-Book Nonfiction')
        .get('.loading-msg').should('not.exist')
    })

    it('Should not display the list of book types when a list item is clicked', () => {
      cy.get('.listItem').eq(0).click()
        .get('.list-container').should('not.exist')
        .get('.nav').should('be.visible')
        .url().should('eq', 'http://localhost:3000/bookshelf/combined-print-and-e-book-fiction')
    })


      it('Should display an error if the fetch call returns an error', () => {

        cy.return404()
          .reload()
          .get('.errorContainer').should('be.visible').should('contain', 'Sorry, page not found!')
          .get('.errorContainer > a > button').should('be.visible').should('contain', 'GO TO HOMEPAGE')

        cy.return500()
          .reload()
          .get('.errorContainer').should('be.visible').should('contain', 'Sorry, this page isn\'t working!')
          .get('.errorContainer > a > button').should('be.visible').should('contain', 'GO TO HOMEPAGE')

      })
})
