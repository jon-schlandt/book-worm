import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav'>
      <h1>BookWorm</h1>
      <ul className='nav-links'>
        <NavLink
          exact to='/'
          activeStyle={{
            textDecoration: 'underline',
            textDecorationColor: '#F5F1E1',
            color: 'inherit'
          }}
          >
          <li>Home</li>
        </NavLink>

          <li>Favorites</li>
      </ul>
    </nav>
  )
}

export default Navbar
