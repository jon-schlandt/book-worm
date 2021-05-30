import {cleanListData} from './utilities'

// Maybe getCategoryOf and error handling?

export const getLists = () => {
  return fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=A7HbLAtK8PlqUjAQ0Ol77w3tNU1cZS4b')
    .then(response => response.json())
    .then(data => cleanListData(data.results))
}

export const getTypeOf = ( typeOf: string ) => {
  return fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${typeOf}.json?api-key=A7HbLAtK8PlqUjAQ0Ol77w3tNU1cZS4b`)
    .then(response => response.json())
}
