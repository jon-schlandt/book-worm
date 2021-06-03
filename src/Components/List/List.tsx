import React from 'react'
import './List.css'
import { Link } from 'react-router-dom'
import { ListProps } from '../../util/types'


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
      <div className='listTitle'>
        <h2>Current Best Sellers</h2>
        <h4>Courtesy of The New York Times</h4>
      </div>
      <ul className="list-container">
        <h2>Categories</h2>
        {listItems}
      </ul>
    </div>
  )
}

export default List
