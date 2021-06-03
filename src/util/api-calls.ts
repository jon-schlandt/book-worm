import {cleanListData, cleanBookData} from './utilities'

// ***** ----- Fetching ----- ***** //

export const getLists = () => {
  return fetch('https://httpstat.us/500')
    .then(response => {
      return checkResponse(response)
    })
    .then(data => cleanListData(data.results))
}

// Maybe getCategoryOf?

export const getTypeOf = ( typeOf: string ) => {
  return fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${typeOf}.json?api-key=A7HbLAtK8PlqUjAQ0Ol77w3tNU1cZS4b`)
  .then(response => {
    return checkResponse(response)
  })
  .then(data => cleanBookData(data.results.books))
}

// ***** ----- Error Handling ----- ***** //

const checkResponse = (response: any) => {
  if (response.ok) {
    return response.json()
  }

  handleError(response.status)
}

const handleError = (status: number) => {
  if (status === 404) {
    throw Error('Sorry, page not found!')
  }

  if (status === 500) {
    throw Error('Sorry, this page isn\'t working!')
  }

  throw Error('Sorry, something went wrong!')
}
