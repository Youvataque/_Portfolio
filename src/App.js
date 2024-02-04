import './App.css';
import './css/theme.css'

import profilPic from './img/profilPic.png'

import {NavBar} from './Views/component/NavBar/NavBar';
import {Hamburger} from './Views/component/NavBar/Hamburger';
import { Accueil } from './Views/Accueil/Accueil';
import { About } from './Views/About/About';
import { e404 } from './Views/Erreur/e404';
import {Route, Routes, useLocation} from 'react-router-dom';
import { Contact } from './Views/Contact/Contact';
import { Projects } from './Views/Projectss/Projects';
import { ThemeSwitcher } from './Views/component/ThemeSwitch/ThemeSwitcher';
import { Gap } from './Views/component/Gap';
import React, { useState, useEffect } from 'react';
import Context from './Context';
import { LangSwitcher } from './Views/component/LangSwitch/LangSwitcher';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("selectedItem"));
  const [lang, setLang] = useState(localStorage.getItem("lang") != null? localStorage.getItem("lang") : "fr");
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Context.Provider value={{ theme, setTheme, lang, setLang }}>
    <div className="App" data-theme="dark">
      <header className="App-header">
        <div className='AppBar'>
          <div className='Leading'>
            <ThemeSwitcher />
            <img className='profilPic' src={profilPic} draggable="false"/>
            <LangSwitcher/>
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
          {lang == "fr"? "Créé et designé par Yannis Seguin" : "Designed and built by Yannis Seguin"}
        </p>
        <p className='CopyrightText'>
          ©Copyright 2024 - Yannis Seguin
        </p>
        <Gap size={20}/>
      </footer>
    </div>
  </Context.Provider>
);
}

export default App;
