import React from 'react'
import './List.css'
import { Link } from 'react-router-dom'

type ListProps = {
  list: {
    displayName: string,
    queryName: string
  }[]
}

const List = ( {list}: ListProps ) => {

  const listItems = list.map((item, index) => {
     return (
      <Link to={`/bookshelf/${item.queryName}`} key={index}>
         <li
           className='listItem'
           id={item.queryName}
         >
           {item.displayName}
         </li>
      </Link>
     )
   })

  return (
    <div className="list-background">
      <h2 className='listTitle'>NYT Best Seller Lists</h2>
      <ul className="list-container">
        {listItems}
      </ul>
    </div>
  )
}

export default List
