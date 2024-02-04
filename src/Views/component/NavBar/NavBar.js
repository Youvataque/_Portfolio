import { Link } from 'react-router-dom';
import '../../../css/component.css';
import { useContext } from 'react';
import Context from '../../../Context';
export function NavBar() {
  const {lang} = useContext(Context);
  return <div className='navbar'>
    <nav className="navbar-nav">
          <Link className='nav-link' to='/'>{lang == "fr"? "Accueil" : "Home"}</Link>
          <Link className='nav-link' to='/projects'>{lang == "fr"? "Projets" : "Projects"}</Link>
          <Link className='nav-link' to='/about'>{lang == "fr"? "À propos" : "About"}</Link>
          <Link className='nav-link' to='/contact'>{lang == "fr"? "Contact" : "Contact"}</Link>
    </nav>
  </div>
  
}