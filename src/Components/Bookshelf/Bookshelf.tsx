import React from 'react'
import { getTypeOf } from '../../util/api-calls'
import '../Book/Book'

type BookshelfProps = {
  queryID: string
}

type BookshelfState = {
    books: {
    rank: number,
    publisher: string,
    description: string,
    title: string,
    author: string,
    bookImage: string,
    amazonProductUrl: string
  }[] | []
}

class Bookshelf extends React.Component<BookshelfProps, BookshelfState> {
  constructor(props: BookshelfProps) {
    super(props)
    this.state= {
      books: [],
    }
  }

  componentDidMount() {
    getTypeOf( this.props.queryID )
      .then(result => this.setState({books: result}, () =>  console.log("RESULT", this.state.books)))
      console.log("STATE", this.state.books);
      
  }

  render() {
    return (
      <h1>Hello</h1>
    )
  }
}


export default Bookshelf
