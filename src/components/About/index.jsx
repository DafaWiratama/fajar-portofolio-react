import React from 'react';
import { UilDownloadAlt } from '@iconscout/react-unicons';
import photoAbout from '../../assets/images/foto4.jpg';
import './styles.css';

function About() {
  return (
    <section className="container-about" id="about">
      <h1>About</h1>
      <p>My Introdaction</p>
      <div className="wrapper-profile">
        <div className="container-wrapper-photo">
          <div className="wrapper-photo">
            <img src={photoAbout} alt="profile-about" />
          </div>
        </div>
        <div className="wrapper-profile-data">
          <p>
            1 year more after graduating from my university into the world of web development.
            Becoming a web Developer was my dream from an early age. Currently, I&apos;m focused on
            learning the backend developer php language to achieve my desired goal.
          </p>

          <div className="container-experience">
            <div className="wrapper-experience">
              <h1>01+</h1>
              <p>Years experience</p>
            </div>

            <div className="wrapper-experience">
              <h1>01+</h1>
              <p>Years experience</p>
            </div>

            <div className="wrapper-experience">
              <h1>01+</h1>
              <p>Years experience</p>
            </div>
          </div>

          <button type="button" className="btn-download-cv">
            Download CV
            <UilDownloadAlt className="icon-btn" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
