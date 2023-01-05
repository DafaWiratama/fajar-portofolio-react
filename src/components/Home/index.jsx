/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  UilFacebook,
  UilInstagram,
  UilWhatsapp,
  UilGithub,
  UilMessage,
  UilMouseAlt,
  UilArrowDown,
} from '@iconscout/react-unicons';
import BackgroundPhoto from '../../assets/icons/BackgroundPhoto';
import './styles.css';

function Home() {
  return (
    <section className="container-home" id="home">
      <div className="wrapper-home">
        <div className="home-social">
          <a
            href="https://www.facebook.com/01010101010101x/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilFacebook className="icon-social-home" />
          </a>
          <a href="https://www.instagram.com/fajarrr035" target="_blank" rel="noopener noreferrer">
            <UilInstagram className="icon-social-home" />
          </a>
          <a href="https://wa.me/6281213971331" target="_blank" rel="noopener noreferrer">
            <UilWhatsapp className="icon-social-home" />
          </a>
          <a href="https://github.com/fajar035" target="_blank" rel="noopener noreferrer">
            <UilGithub className="icon-social-home" />
          </a>
        </div>

        <div className="home-data">
          <div className="home-profile">
            <h1>
              Hi, I&apos;am <span>Fajar Pratama</span>
            </h1>
            <h3>Fullstack Developer</h3>
            <p>
              I really like solving problems in programming implementation. This has its own
              happiness for me, so I am more eager to learn programming. My experience is to create
              a website project using the concept of single page application. Maybe I would like to
              inform you more about my portfolio through this CV.
            </p>
          </div>

          <button className="btn-contact" type="button">
            <a href="#contact" className="btn-contact-home">
              Contact Me
              <UilMessage className="icon-btn-contact" />
            </a>
          </button>

          <div className="scroll-down">
            <UilMouseAlt className="icon-scroll icon-mouse" />
            <p>Scroll Down</p>
            <UilArrowDown className="icon-arrow" />
          </div>
        </div>

        <div className="home-photo">
          <BackgroundPhoto />
        </div>
      </div>
    </section>
  );
}

export default Home;
