Cypress.Commands.add('load', () => {
    cy.intercept('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=A7HbLAtK8PlqUjAQ0Ol77w3tNU1cZS4b', {
        status: "OK",
        copyright: "Copyright (c) 2021 The New York Times Company.  All Rights Reserved.",
        num_results: 59,
        results: [
            {
            list_name: "Combined Print and E-Book Fiction",
            display_name: "Combined Print & E-Book Fiction",
            list_name_encoded: "combined-print-and-e-book-fiction",
            oldest_published_date: "2011-02-13",
            newest_published_date: "2021-06-06",
            updated: "WEEKLY"
            },
            {
            list_name: "Combined Print and E-Book Nonfiction",
            display_name: "Combined Print & E-Book Nonfiction",
            list_name_encoded: "combined-print-and-e-book-nonfiction",
            oldest_published_date: "2011-02-13",
            newest_published_date: "2021-06-06",
            updated: "WEEKLY"
            },
         ]
    })
    cy.visit('http://localhost:3000');
  })

  // Cypress.Commands.add('')
