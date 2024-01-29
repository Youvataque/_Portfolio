import './App.css';
import './css/theme.css'

import profilPic from './img/profilPic.png'

import {NavBar} from './Views/component/NavBar/NavBar';
import {Hamburger} from './Views/component/NavBar/Hamburger';
import { Accueil } from './Views/Accueil/Accueil';
import { About } from './Views/About/About';
import { e404 } from './Views/Erreur/e404';
import {Route, Routes} from 'react-router-dom';
import { Contact } from './Views/Contact/Contact';
import { Projects } from './Views/Projectss/Projects';
import { ThemeSwitcher } from './Views/component/ThemeSwitch/ThemeSwitcher';
import { Gap } from './Views/component/Gap';
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
          <Hamburger/>
          <NavBar/>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<e404 />} />
      </Routes>
      <Gap size={120}/>
      <footer className='Footer'>
        <p className='CopyrightText'>
          Designed and built by Yannis Seguin
        </p>
        <p className='CopyrightText'>
          ©Copyright 2024 - Yannis Seguin
        </p>
        <Gap size={20}/>
      </footer>
    </div>
  </TempContext.Provider>
);
}

export default App;
