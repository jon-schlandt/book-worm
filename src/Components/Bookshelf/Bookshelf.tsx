import React from 'react'
import { getTypeOf } from '../../util/api-calls'
import Book from '../Book/Book'
import '../Bookshelf/Bookshelf.css'
import { formatBookshelfTitle } from '../../util/utilities'
import { BookshelfProps,  BookshelfState } from '../../util/types'
import Error from '../Error/Error'

class Bookshelf extends React.Component<BookshelfProps, BookshelfState> {
  constructor(props: BookshelfProps) {
    super(props)
    this.state = {
      books: [],
      error: ''
    }
  }

  componentDidMount = () => {
    if (this.props.queryID) {
    getTypeOf( this.props.queryID )
      .then(result => this.setState({books: result}))
      .catch(error => this.setState({error: error.message}))
    }
  }

  handleClick = (id: string, isFavorite: boolean) => {
    if (this.state.books) {
      const favoriteBook = this.state.books.find(book => book.id === id)
      if (favoriteBook && this.props.addToFavorites) {
        this.props.addToFavorites(favoriteBook, isFavorite)
      }
    }
  }

  checkIfFavorite(id: string) {
    const foundBook = this.props.favoriteBooks?.find(favorite => favorite.id === id)
    return foundBook ? true : false
  }
  
  render() {

    if (this.state.error) {
      return (
        <Error message={this.state.error}/>
      )
    }
    let bookCards;
    const whichData = this.props.queryID ? this.state.books : this.props.favoriteBooks
    if (whichData) {
      bookCards = whichData.map(book => {
        return (
          <Book
            key= {book.id}
            id= {book.id}
            title= {book.title}
            author= {book.author}
            rank= {book.rank}
            bookImage= {book.bookImage}
            isFavorite={this.state.books.length ? this.checkIfFavorite(book.id) : true}
            handleClick= {this.handleClick}
          />
        )
      })
    }

    if (!this.props.favoriteBooks && !this.state.books.length) {
      return (
        <h3>Loading</h3>
      )
    } else {

      return (
        <div className='bookshelf-background'>
          {(this.props.queryID && <h2 className='bookType'>{formatBookshelfTitle(this.props.queryID.split('-').join(' '))}</h2>) || <h2 className='bookType'>{this.props.favoritesHeader}</h2>}
          <section className='bookshelf'>
            {bookCards}
          </section>
        </div>
      )
    }
  }

}


export { Bookshelf }
