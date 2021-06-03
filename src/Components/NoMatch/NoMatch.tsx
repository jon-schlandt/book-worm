
import React from 'react'
import { Link } from 'react-router-dom'
import './NoMatch.css'


const NoMatch = ({errorMsg}: {errorMsg: string}) => {
  return (
    <div className="noMatchContainer">
      <h1 className="noMatchError">{errorMsg}</h1>
      <Link to='/'>
          <button>GO TO HOMEPAGE</button>
      </Link>
    </div>
  )
}

export default NoMatch
