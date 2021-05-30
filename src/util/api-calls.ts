import {cleanListData} from './utilities'

// Maybe getCategoryOf and error handling?

const listEndpoint = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=A7HbLAtK8PlqUjAQ0Ol77w3tNU1cZS4b'
const errorEndpoint = 'https://httpstat.us/500'

// ***** ----- Fetching ----- ***** //

export const getLists = () => {
  return fetch(errorEndpoint)
    .then(response => {
      if (response.ok) {
        return response.json()
      }

      handleError(response.status)
    })
    .then(data => cleanListData(data.results))
}

export const getTypeOf = ( typeOf: string ) => {
  return fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${typeOf}.json?api-key=A7HbLAtK8PlqUjAQ0Ol77w3tNU1cZS4b`)
    .then(response => response.json())
}

// ***** ----- Error Handling ----- ***** //

function handleError(status: number) {
  if (status === 404) {
    throw Error('404')
  }

  if (status === 500) {
    throw Error('500')
  }

  throw Error('Sorry, something went wrong.')
}
