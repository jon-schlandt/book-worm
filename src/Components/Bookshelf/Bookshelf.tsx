import React from 'react'
import { getTypeOf } from '../../util/api-calls'
import Book from '../Book/Book'
import '../Bookshelf/Bookshelf.css'

type BookshelfProps = {
  queryID?: string,
  favoriteBooks?: Book[] | null,
  addToFavorites?: (book: Book) => void
}

interface Book {
  rank: number,
  publisher: string,
  description: string,
  title: string,
  author: string,
  bookImage: string,
  amazonProductUrl: string
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


  handleClick = (title: string) => {
    if (this.state.books) {
      const favoriteBook = this.state.books.find(book => book.title === title)
      if (favoriteBook) {
        this.addToFavorites(favoriteBook)
      }
    }
  }


  // addToFavorites = (book: Book) => {
  //   if (!this.state.favorites) {
  //     this.setState({ favorites: [book]})
  //   } else {
  //     this.setState({ favorites: [...this.state.favorites, book]})
  //   }
  // }

  render() {
    let bookCards;
    const whichData = (this.props.queryID === 'favorites') ? this.state.favorites : this.state.books
    if (whichData) {
      bookCards = whichData.map((book, index) => {
        return (
          <Book
            key= {index}
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


export { Bookshelf, Book }
