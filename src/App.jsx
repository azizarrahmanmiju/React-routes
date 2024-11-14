
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <h5>My Wbsite</h5>

      <div >
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/services">Services</Link>
        <Link className='link' to="/about">About</Link>
        <Link className='link' to="/Contact">Contact</Link>
        <Link className='link' to="/users">Users</Link>
      </div>
      <Outlet />
      <footer> <h2>THIS IS FOOTER</h2></footer>
    </div>
  )
}

export default App
