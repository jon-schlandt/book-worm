import React, { ReactNode } from 'react'
import './List.css'

type ListProps = {
  list: {
    displayName: string,
    queryName: string
  }[]
}

const List = ( {list}: ListProps ) => {

  const listItems = list.map((item, index) => {
     return (
       <li
         key={index}
         className='listItem'
         id={item.queryName}
       >
         {item.displayName}
       </li>
     )
   })

  return (
    <div className="list-background">
      <ul className="list-container">
        {listItems}
      </ul>
    </div>
  )
}

export default List
