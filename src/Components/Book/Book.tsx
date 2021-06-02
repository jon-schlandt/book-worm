import './Book.css'
import React from 'react'

type BookProps = {
    title: string,
    author: string,
    rank: number,
    bookImage: string,
    id: string,
    handleClick: (id: string) => void
}

const Book = ({ title, author, rank, bookImage, id, handleClick }: BookProps) => {
  return (
    <article className='bookCard'>
          <span>
            <p className='rank'>Rank: {rank}</p>
            <button onClick={ () => handleClick(title)}>Add to Favorites 🐛</button>
          </span>
          <div className='bookDetails'>
            <img className='img' src={bookImage} alt='Book Cover'/>
            <h2 className='title'>{title}</h2>
            <h3 className='author'>{author}</h3>
          </div>
        </article>
  )
}

export default Book
