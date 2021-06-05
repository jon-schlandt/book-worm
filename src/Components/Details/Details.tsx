import './Details.css'
import { DetailsProps} from '../../util/types'

const Details = (props: DetailsProps) => {
    console.log(props.info);
    if(Object.keys(props.info).length) {
    return (
        <article className='detailsArticle'>
        <img className='bookImg' src={props.info.bookImage} alt='Book Cover'/>
            <div className='detailsContainer'>
                <h1 className='detailsTitle'>{props.info.title}</h1>
                <h2 className='detailsAuthor'>By {props.info.author}</h2>
                {props.info.publisher &&
                <p className='detailsPublisher'>Publisher: {props.info.publisher}</p>
                }
                {props.info.description &&
                <p className='detailsDescription'>Description: {props.info.description}</p>
                }
                <p className='detailsRank'>Rank: {props.info.rank}</p>
                {props.info.amazonProductUrl &&
                <a className='detailsAmzLink' href={props.info.amazonProductUrl}>Amazon Link</a>
                }
            </div>
        </article>
    )
    }
    return (
        <h1>Page could not load</h1>
    )
}

export default Details