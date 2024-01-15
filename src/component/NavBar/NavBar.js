import { Link } from 'react-router-dom';
import './NavBar.css';
export function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className='nav-link' to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to='/projects'>Projects</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to='/about'>About</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}