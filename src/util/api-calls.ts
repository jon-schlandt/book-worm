import {cleanListData} from './utilities'

// ***** ----- Fetching ----- ***** //

export const getLists = () => {
  return fetch('http://httpstat.us/416')
    .then(response => {
      if (response.ok) {
        return response.json()
      }

      handleError(response.status)
    })
    .then(data => cleanListData(data.results))
}

// Maybe getCategoryOf?

export const getTypeOf = ( typeOf: string ) => {
  return fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${typeOf}.json?api-key=A7HbLAtK8PlqUjAQ0Ol77w3tNU1cZS4b`)
    .then(response => response.json())
}

// ***** ----- Error Handling ----- ***** //

function handleError(status: number) {
  if (status === 404) {
    throw ('404 | Sorry, page not found.')
  }

  if (status === 500) {
    throw ('500 | Sorry, this page isn\'t working.')
  }

  throw ('Sorry, something went wrong.')
}
