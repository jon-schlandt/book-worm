import React from 'react'
import '../Book/Book'

type BookshelfProps = {
  queryID: string
}

class Bookshelf extends React.Component<BookshelfProps> {
  constructor(props: BookshelfProps) {
    super(props)
    this.state= {

    }
  }

  render() {
    return (
      <h1>Hello</h1>
    )
  }
}


export default Bookshelf
