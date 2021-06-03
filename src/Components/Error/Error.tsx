
import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'


const Error = ({message}: {message: string}) => {
  return (
    <div className="errorContainer">
      <h1 className="error">{message}</h1>
      <Link to='/'>
          <button>GO TO HOMEPAGE</button>
      </Link>
    </div>
  )
}

export default Error
