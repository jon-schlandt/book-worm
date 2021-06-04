import './Book.css'
import React from 'react'
import { BookProps, BookState } from '../../util/types'

// const Book = ({ title, author, rank, bookImage, id, handleClick }: BookProps) => {
//   return (
//     <article className='bookCard'>
//           <span>
//             <p className='rank'>Rank: {rank}</p>
//             <button className='favoritesBtn' onClick={ () => handleClick(id)}>Add to Favorites 🐛</button>
//           </span>
//           <img className='bookImg' src={bookImage} alt='Book Cover'/>
//           <div className='bookDetails'>
//             <h2 className='title'>{title}</h2>
//             <h3 className='author'>{author}</h3>
//           </div>
//         </article>
//   )
// }

class Book extends React.Component<BookProps, BookState> {
  state: BookState;
  constructor(props: BookProps) {
    super(props)
    this.state= {
      favorite: props.isFavorite
    }
  }

  onClick = () => {
    this.updateFavorite()
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
          <button className='favoritesBtn' onClick={ () => this.onClick()}>{buttonText}</button>
        </span>
        <img className='bookImg' src={this.props.bookImage} alt='Book Cover'/>
        <div className='bookDetails'>
          <h2 className='title'>{this.props.title}</h2>
          <h3 className='author'>{this.props.author}</h3>
        </div>
      </article>
    )
  }
}

export default Book
