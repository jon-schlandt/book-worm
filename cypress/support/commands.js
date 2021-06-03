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

Cypress.Commands.add('bookshelf', () => {
  cy.intercept('https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=A7HbLAtK8PlqUjAQ0Ol77w3tNU1cZS4b', {
    status: "OK",
    copyright: "Copyright (c) 2021 The New York Times Company.  All Rights Reserved.",
    num_results: 2,
    last_modified: "2021-05-26T22:14:37-04:00",
    results: {
      list_name: "Combined Print and E-Book Fiction",
      list_name_encoded: "combined-print-and-e-book-fiction",
      bestsellers_date: "2021-05-22",
      published_date: "2021-06-06",
      published_date_description: "latest",
      next_published_date: "",
      previous_published_date: "2021-05-30",
      display_name: "Combined Print & E-Book Fiction",
      normal_list_ends_at: 15,
      updated: "WEEKLY",
      books: [{
          rank: 1,
          rank_last_week: 3,
          weeks_on_list: 3,
          asterisk: 0,
          dagger: 0,
          primary_isbn10: "1501171364",
          primary_isbn13: "9781501171369",
          publisher: "Simon & Schuster",
          description: "Hannah Hall discovers truths about her missing husband and bonds with his daughter from a previous relationship.",
          price: "0.00",
          title: "THE LAST THING HE TOLD ME",
          author: "Laura Dave",
          contributor: "by Laura Dave",
          contributor_note: "",
          book_image: "https://storage.googleapis.com/du-prd/books/images/9781501171345.jpg",
          book_image_width: 331,
          book_image_height: 500,
          amazon_product_url: "https://www.amazon.com/dp/1501171348?tag=NYTBSREV-20",
          age_group: "",
          book_review_link: "",
          first_chapter_link: "",
          sunday_review_link: "",
          article_chapter_link: "",
          isbns: [{
              isbn10: "1501171348",
              isbn13: "9781501171345"
            },
            {
              isbn10: "1501171364",
              isbn13: "9781501171369"
            }
          ],
          buy_links: [{
              name: "Amazon",
              url: "https://www.amazon.com/dp/1501171348?tag=NYTBSREV-20"
            },
            {
              name: "Apple Books",
              url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+LAST+THING+HE+TOLD+ME&author=Laura+Dave"
            },
            {
              name: "Barnes and Noble",
              url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781501171369"
            },
            {
              name: "Books-A-Million",
              url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLAST%252BTHING%252BHE%252BTOLD%252BME%252FLaura%252BDave%252F9781501171369&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLAST%252BTHING%252BHE%252BTOLD%252BME%252BLaura%252BDave"
            },
            {
              name: "Bookshop",
              url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501171369&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BLAST%2BTHING%2BHE%2BTOLD%2BME"
            },
            {
              name: "IndieBound",
              url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781501171369%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLAST%2BTHING%2BHE%2BTOLD%2BME%2BLaura%2BDave%26aff%3DNYT"
            }
          ],
          book_uri: "nyt://book/e2ee5109-2949-5f7d-ac7f-120a514f38f2"
        },
        {
          rank: 2,
          rank_last_week: 2,
          weeks_on_list: 4,
          asterisk: 0,
          dagger: 0,
          primary_isbn10: "0385547684",
          primary_isbn13: "9780385547680",
          publisher: "Doubleday",
          description: "Samuel Sooleymon receives a basketball scholarship to North Carolina Central and determines to bring his family over from a civil war-ravaged South Sudan.",
          price: "0.00",
          title: "SOOLEY",
          author: "John Grisham",
          contributor: "by John Grisham",
          contributor_note: "",
          book_image: "https://storage.googleapis.com/du-prd/books/images/9780385547680.jpg",
          book_image_width: 342,
          book_image_height: 500,
          amazon_product_url: "https://www.amazon.com/dp/0385547684?tag=NYTBSREV-20",
          age_group: "",
          book_review_link: "",
          first_chapter_link: "",
          sunday_review_link: "",
          article_chapter_link: "",
          isbns: [{
              isbn10: "0385547684",
              isbn13: "9780385547680"
            },
            {
              isbn10: "0385547714",
              isbn13: "9780385547710"
            },
            {
              isbn10: "0593459288",
              isbn13: "9780593459287"
            }
          ],
          buy_links: [{
              name: "Amazon",
              url: "https://www.amazon.com/dp/0385547684?tag=NYTBSREV-20"
            },
            {
              name: "Apple Books",
              url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=SOOLEY&author=John+Grisham"
            },
            {
              name: "Barnes and Noble",
              url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780385547680"
            },
            {
              name: "Books-A-Million",
              url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FSOOLEY%252FJohn%252BGrisham%252F9780385547680&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DSOOLEY%252BJohn%252BGrisham"
            },
            {
              name: "Bookshop",
              url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780385547680&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DSOOLEY"
            },
            {
              name: "IndieBound",
              url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780385547680%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DSOOLEY%2BJohn%2BGrisham%26aff%3DNYT"
            }
          ],
          book_uri: "nyt://book/010af0b7-2a30-598f-97f5-1ed63c3426e1"
        }
      ]}
    })
      cy.get('.listItem').eq(0).click()
  })

Cypress.Commands.add('return404', () => {
  cy.intercept('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=A7HbLAtK8PlqUjAQ0Ol77w3tNU1cZS4b',
    {
      statusCode: 404
    })
  })
