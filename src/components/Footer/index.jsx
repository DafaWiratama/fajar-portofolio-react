import React from 'react';
import { UilFacebook, UilInstagram, UilWhatsapp, UilGithub } from '@iconscout/react-unicons';
import './styles.css';

function Footer() {
  return (
    <footer>
      <section className="waves">
        <div className="wave" id="wave1" />
        <div className="wave" id="wave2" />
        <div className="wave" id="wave3" />
        <div className="wave" id="wave4" />
      </section>

      <section className="wrapper-profile-footer">
        <h1 className="title-footer">Fajar Pratama Vishinggah</h1>

        <ul className="footer-menu">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Services</li>
          <li>Portofolio</li>
          <li>Contact Me</li>
        </ul>

        <div className="menu-nav wrapper-icon-footer">
          <UilFacebook className="icon-footer-fb icon-footer" size="35" />
          <UilInstagram className="icon-footer-ig icon-footer" size="35" />
          <UilWhatsapp className="icon-footer-wa icon-footer" size="35" />
          <UilGithub className="icon-footer-git icon-footer" size="35" />
        </div>

        <p>&copy;2023 Let&apos;s get a job | Portofolio - Fajar Pratama Vishinggah</p>
      </section>
    </footer>
  );
}

export default Footer;
