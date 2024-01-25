import './App.css';
import './css/theme.css'
import {NavBar} from './Views/component/NavBar/NavBar';
import { Accueil } from './Views/Accueil/Accueil';
import { About } from './Views/About/About';
import {Route, Routes} from 'react-router-dom'
import { Contact } from './Views/Contact/Contact';
import { Projects } from './Views/Projectss/Projects';
import { ThemeSwitcher } from './Views/component/ThemeSwitch/ThemeSwitcher';
import profilPic from './img/profilPic.png'
import React, { useState } from 'react';
import TempContext from './TempContext';

function App() {
  const [temp, setTemp] = useState(localStorage.getItem("selectedItem"));
  return (
    <TempContext.Provider value={{ temp, setTemp }}>
    <div className="App" data-theme="dark">
      <header className="App-header">
        <div className='AppBar'>
          <div className='Leading'>
            <ThemeSwitcher />
            <img className='profilPic' src={profilPic} />
          </div>
          <NavBar />
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  </TempContext.Provider>
);
}

export default App;
