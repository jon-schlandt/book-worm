import React from 'react'
import './List.css'

type ListProps = {
  list: {
    displayName: string,
    queryName: string
  }[]
}

const List: React.FC<ListProps> = ( {list}: ListProps ) => {

  const listItems = list.map(item => {
    return (
      // <li className='listItem' id={item.list_name_encoded} >{item.display_name}</li>
      <h1>FML {item}</h1>
    )
  })
  return <div></div>
}

export default List
// export {}
