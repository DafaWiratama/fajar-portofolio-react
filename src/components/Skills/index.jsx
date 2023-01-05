/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { UilBracketsCurly, UilAngleDown, UilServerNetworkAlt } from '@iconscout/react-unicons';
import './styles.css';

function Skills() {
  const [openFrontend, setOpenFrontend] = useState(false);
  const [openBackend, setopenBackend] = useState(false);

  const handleFrontend = () => setOpenFrontend(!openFrontend);
  const handleBackend = () => setopenBackend(!openBackend);

  useEffect(() => {}, [openFrontend, openBackend]);

  return (
    <section className="container-skills" id="skills">
      <h1>Skills</h1>
      <p>My Technical Level</p>

      <div className="wrapper-skills">
        <div className="header-skills" onClick={handleFrontend}>
          <div className="left-skills">
            <UilBracketsCurly className="icon-skills" />
            <div className="title-skills">
              <h1>Frontend Developer</h1>
              <p>2 years experience</p>
            </div>
          </div>
          <UilAngleDown className={`icon-skills ${openFrontend ? 'icon-up' : ''}`} />
        </div>

        <div className="header-skills" onClick={handleBackend}>
          <div className="left-skills">
            <UilServerNetworkAlt className="icon-skills" />
            <div className="title-skills">
              <h1>Backend Developer</h1>
              <p>1 years experience</p>
            </div>
          </div>
          <UilAngleDown className={`icon-skills ${openBackend ? 'icon-up' : ''}`} />
        </div>
      </div>
      <div className="wrapper-skills-menu">
        <div className="menu-skills">
          <p>Menu Skill</p>
        </div>

        <div className="menu-skills">
          <p>Menu Skill</p>
        </div>
      </div>

      {/* <div className="data-skills"></div> */}
    </section>
  );
}

export default Skills;
