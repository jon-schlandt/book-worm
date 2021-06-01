import React from 'react'
import { getTypeOf } from '../../util/api-calls'
import Book from '../Book/Book'
import '../Bookshelf/Bookshelf.css'

type BookshelfProps = {
  queryID: string
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


type BookshelfState = {
    books: Book[] | null,
    favorites: Book[] | null
}



class Bookshelf extends React.Component<BookshelfProps, BookshelfState> {
  state: BookshelfState;
  constructor(props: BookshelfProps) {
    super(props)
    this.state= {
      books: null,
      favorites: null
    }
  }

  componentDidMount() {
    getTypeOf( this.props.queryID )
      .then(result => this.setState({books: result}))
  }

  render() {
    let bookCards;
    if(this.state.books) {
    bookCards = this.state.books.map((book, index) => {
      return (
        <Book
        key= {index}
        title= {book.title}
        author= {book.author}
        rank= {book.rank}
        bookImage= {book.bookImage}
        />
      )
    })
    }
    return (
      !this.state.books ? <h3>Loading</h3>
      : <div className='bookshelf-background'>
          <section className='bookshelf'>
            <h2>{this.props.queryID}</h2>
            {bookCards}
          </section>
        </div>
    )
  }
}


export default Bookshelf
