import './Book.css'
import React from 'react'
import { BookProps, BookState } from '../../util/types'
import { Link } from 'react-router-dom'
// import Details from '../Details/Details'

class Book extends React.Component<BookProps, BookState> {
  state: BookState;
  constructor(props: BookProps) {
    super(props)
    this.state= {
      favorite: props.isFavorite
    }
  }

  updateFavorite = () => {
    if(!this.state.favorite) {
      this.setState({ favorite: true }, () => this.props.handleClick(this.props.id, this.state.favorite))
    } else {
      this.setState({ favorite: false }, () => this.props.handleClick(this.props.id, this.state.favorite))
    }
  }

  render() {
    let buttonText = 'Add to Favorites 🐛'
    if(this.state.favorite){
      buttonText = 'Remove from Favorites'
    }
    return(
    <article className='bookCard'>
        <span>
          <p className='rank'>Rank: {this.props.rank}</p>
          <button className='favoritesBtn' onClick={ () => this.updateFavorite()}>{buttonText}</button>
        </span>
        <img className='bookImg' src={this.props.bookImage} alt='Book Cover'/>
        <div className='bookDetails'>
          <h2 className='title'>{this.props.title}</h2>
          <h3 className='author'>{this.props.author}</h3>
        </div>
        <Link  to={`/bookshelf/details${this.props.id}`}>
        <button className='detailsBtn' onClick={ () => this.props.findBookDetails(this.props.id) } >Details</button>
        </Link>
      </article>
    )
  }
}

export default Book
