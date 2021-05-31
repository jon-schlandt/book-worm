import './Book.css'

type BookProps = {
    title: string,
    author: string,
    rank: number,
    bookImage: string,
}

function Book({title, author, rank, bookImage}: BookProps) {
    return (
        <article className='bookCard'>
            <img className='img' src={bookImage} alt='Book Cover'/>
            <h2 className='title'>{title}</h2>
            <h3 className='author'>{author}</h3>
            <p className='rank'>Rank: {rank}</p>
        </article>
)
}

export default Book
