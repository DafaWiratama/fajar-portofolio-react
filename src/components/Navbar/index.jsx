import React, { useEffect, useState } from 'react';
import {
  UilMoon,
  UilSun,
  UilApps,
  UilTimes,
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilScenery,
  UilCommentAltMessage,
} from '@iconscout/react-unicons';
import iconTheme from '../../assets/images/iconName.png';
import './styles.css';

function Navbar() {
  const [colorBorder, setColorBorder] = useState(null);
  const [theme, setTheme] = useState('light');
  const [openMenu, setOpenMenu] = useState(false);
  const [darkTheme] = useState('dark-theme');

  const themeToggler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    window.localStorage.setItem('theme', theme);
    document.body.classList.toggle(darkTheme);
  };

  const menutoggler = () => setOpenMenu(!openMenu);

  const initialTheme = () => window.localStorage.setItem('theme', theme);
  const getCurrenttheme = () => window.localStorage.getItem('theme') || theme;

  const listenScrollEvent = () => {
    if (window.scrollY >= 80) return setColorBorder('scroll-header');
    return setColorBorder('');
  };

  useEffect(() => {
    initialTheme();
    getCurrenttheme();
    window.addEventListener('scroll', listenScrollEvent);
  }, [listenScrollEvent, getCurrenttheme]);

  return (
    <header>
      <section className={`container-header ${colorBorder}`}>
        <div className="container-title">
          <img className="icon-title" src={iconTheme} alt="icon" />
          <p style={{ color: colorBorder }}>Fajar Pratama</p>
        </div>

        <div className="container-menu-nav">
          <ul className="menu-nav">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portofolio">Portofolio</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
            <li>
              {theme !== 'dark' ? (
                <button className="btn-icon-theme" type="button" onClick={themeToggler}>
                  <UilMoon />
                </button>
              ) : (
                <button className="btn-icon-theme" type="button" onClick={themeToggler}>
                  <UilSun />
                </button>
              )}
            </li>
          </ul>
        </div>
      </section>

      {!openMenu ? (
        <section className={`header-bottom ${colorBorder}`}>
          <div className="container-title">
            <img className="icon-title" src={iconTheme} alt="icon" />
            <p style={{ color: colorBorder }}>Fajar Pratama</p>
          </div>
          <div className="icon-menu-nav-bottom">
            {theme !== 'dark' ? (
              <button className="btn-icon-theme" type="button" onClick={themeToggler}>
                <UilMoon />
              </button>
            ) : (
              <button className="btn-icon-theme" type="button" onClick={themeToggler}>
                <UilSun />
              </button>
            )}
            <button className="btn-icon-theme" type="button" onClick={menutoggler}>
              <UilApps />
            </button>
          </div>
        </section>
      ) : (
        <section className={`header-bottom-menu ${colorBorder}`}>
          <ul className="wrapper-bottom-menu">
            <li className="link-menu">
              <UilEstate />
              <a className="link-menu" href="#home">
                Home
              </a>
            </li>
            <li className="link-menu">
              <UilUser />
              <a className="link-menu" href="#about">
                About
              </a>
            </li>
            <li className="link-menu">
              <UilFileAlt />
              <a className="link-menu" href="#skills">
                Skills
              </a>
            </li>
            <li className="link-menu">
              <UilBriefcaseAlt />
              <a className="link-menu" href="#services">
                Services
              </a>
            </li>
            <li className="link-menu">
              <UilScenery />
              <a className="link-menu" href="#portofolio">
                Portofolio
              </a>
            </li>
            <li className="link-menu">
              <UilCommentAltMessage />
              <a className="link-menu" href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
          <button className="btn-icon-theme btn-close-nav" type="button" onClick={menutoggler}>
            <UilTimes />
          </button>
        </section>
      )}
    </header>
  );
}

export default Navbar;
