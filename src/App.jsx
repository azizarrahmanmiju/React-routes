
import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <h5>My Wbsite</h5>

      <div className='header' >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/users">Users</NavLink>
      </div>
      <Outlet>


      </Outlet>

      <footer> <div className='footer'><h2>THIS IS FOOTER</h2></div></footer>
    </div>
  )
}

export default App
