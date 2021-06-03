import './Book.css'
import React from 'react'
import { BookProps } from '../../types'

const Book = ({ title, author, rank, bookImage, id, handleClick }: BookProps) => {
  return (
    <article className='bookCard'>
          <span>
            <p className='rank'>Rank: {rank}</p>
            <button className='favoritesBtn' onClick={ () => handleClick(id)}>Add to Favorites 🐛</button>
          </span>
          <img className='bookImg' src={bookImage} alt='Book Cover'/>
          <div className='bookDetails'>
            <h2 className='title'>{title}</h2>
            <h3 className='author'>{author}</h3>
          </div>
        </article>
  )
}

export default Book
