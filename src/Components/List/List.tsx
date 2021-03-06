import React from 'react'
import './List.css'
import { Link } from 'react-router-dom'
import { ListProps } from '../../util/types'


const List = ( {list}: ListProps ) => {

  const listItems = list.map((item, index) => {
     return (
      <li
        key={item.queryName}
        className='listItem'
        id={item.queryName}>
        <Link to={`/bookshelf/${item.queryName}`} key={index}>
          {item.displayName}
        </Link>
      </li>
    )
  })

  return (
    <div className="list-background">
      <div className='listTitle'>
        <h2>Current Best Sellers</h2>
        <h3>Courtesy of The New York Times</h3>
      </div>
      <div className="list-container">
        <h4>Categories</h4>
        <ul>
          {listItems}
        </ul>
      </div>
    </div>
  )
}

export default List
