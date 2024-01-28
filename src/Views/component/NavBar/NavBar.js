import { Link } from 'react-router-dom';
import '../../../css/component.css';
export function NavBar() {
  return <div className='navbar'>
    <nav className="navbar-nav">
          <Link className='nav-link' to='/'>Home</Link>
          <Link className='nav-link' to='/projects'>Projects</Link>
          <Link className='nav-link' to='/about'>About</Link>
          <Link className='nav-link' to='/contact'>Contact</Link>
    </nav>
  </div>
  
}