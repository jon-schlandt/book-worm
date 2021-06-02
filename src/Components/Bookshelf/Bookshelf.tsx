import React from 'react'
import { getTypeOf } from '../../util/api-calls'
import Book from '../Book/Book'
import '../Bookshelf/Bookshelf.css'

type BookshelfProps = {
  queryID?: string,
  favoriteBooks?: Book[] | null,
  addToFavorites?: (book: Book) => void
}

export interface Book {
  rank: number,
  publisher: string,
  description: string,
  title: string,
  author: string,
  bookImage: string,
  amazonProductUrl: string,
  id: string
}


interface BookshelfState {
    books: Book[] | null
}


class Bookshelf extends React.Component<BookshelfProps, BookshelfState> {
  state: BookshelfState;
  constructor(props: BookshelfProps) {
    super(props)
    this.state= {
      books: null,
    }
  }


  componentDidMount() {
    if (this.props.queryID) {
    getTypeOf( this.props.queryID )
      .then(result => this.setState({books: result}))
    }
  }


  handleClick = (id: string) => {
    if (this.state.books) {
      const favoriteBook = this.state.books.find(book => book.id === id)
      if (favoriteBook && this.props.addToFavorites) {
        this.props.addToFavorites(favoriteBook)
      }
    }
  }

  render() {
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
            handleClick= {this.handleClick}
          />
        )
      })
    }

    return (
      !this.state.books ? <h3>Loading</h3>
      : <div className='bookshelf-background'>
          <h2>{this.props.queryID}</h2>
          <section className='bookshelf'>
            {bookCards}
          </section>
        </div>
    )
  }
}


export { Bookshelf }
