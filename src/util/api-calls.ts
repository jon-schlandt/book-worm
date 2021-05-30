import {cleanListData} from './utilities'

// Maybe getCategoryOf and error handling?

const listEndpoint = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=A7HbLAtK8PlqUjAQ0Ol77w3tNU1cZS4b'
const errorEndpoint = 'https://httpstat.us/404'

export const getLists = () => {
  return fetch(errorEndpoint)
    .then(response => {
      if (response.ok) {
        return response.json()
      }

      console.log(response)
    })
    .then(data => cleanListData(data.results))
    .catch(error => console.log(error))
}

export const getTypeOf = ( typeOf: string ) => {
  return fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${typeOf}.json?api-key=A7HbLAtK8PlqUjAQ0Ol77w3tNU1cZS4b`)
    .then(response => response.json())
}
