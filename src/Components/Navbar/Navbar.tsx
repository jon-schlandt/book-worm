import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const activeStyling = {
    textDecoration: 'underline',
    textDecorationColor: '#F5F1E1',
    color: 'inherit'
  }

  return (
    <nav className='nav'>
      <h1>BookWorm</h1>
      <ul className='nav-links'>
        <NavLink
          exact to='/'
          activeStyle={activeStyling}
          >
          <li>Home</li>
        </NavLink>

        <NavLink
          exact to='/bookshelf/favorites'
          activeStyle={activeStyling}
          >
          <li>Favorites</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
