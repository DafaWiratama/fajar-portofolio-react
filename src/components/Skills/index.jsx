/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { UilAngleDown, UilBracketsCurly, UilServerNetworkAlt } from '@iconscout/react-unicons';
import './styles.css';
import data from '../../dummy/data';

function Skills() {
  const [openFrontend, setOpenFrontend] = useState(true);
  const [openBackend, setopenBackend] = useState(true);
  const [fe, setFe] = useState([]);
  const [be, setBe] = useState([]);

  const handleFrontend = () => setOpenFrontend(!openFrontend);
  const handleBackend = () => setopenBackend(!openBackend);

  useEffect(() => {
    setFe(data.data[0].skills);
    setBe(data.data[1].skills);
  }, []);

  return (
    <section className="section-skills" id="skills">
      <h1>Skills</h1>
      <p>My Technical Level</p>
      <div className="wrapper-skills">
        <div className="content_skills" onClick={handleFrontend}>
          <div className="header_skills">
            <div className="left-skills">
              <UilBracketsCurly className="icon-skills" />
              <div className="title-skills">
                <h1>Frontend Developer</h1>
                <p>2 years experience</p>
              </div>
            </div>
            <UilAngleDown className={`icon-skills ${openFrontend ? 'icon-up' : ''}`} />
          </div>

          <ul className={`menu-skills ${openFrontend ? 'menu-active' : ''}`}>
            {fe.map((item, idx) => {
              return (
                <li key={idx}>
                  <img src={item.img} alt="icons" width={40} className="icon-skills" />
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="content_skills" onClick={handleBackend}>
          <div className="header_skills">
            <div className="left-skills">
              <UilServerNetworkAlt className="icon-skills" />
              <div className="title-skills">
                <h1>Backend Developer</h1>
                <p>1 years experience</p>
              </div>
            </div>
            <UilAngleDown className={`icon-skills ${openBackend ? 'icon-up' : ''}`} />
          </div>

          <ul className={`menu-skills ${openBackend ? 'menu-active' : ''}`}>
            {be.map((item, idx) => {
              return (
                <li key={idx}>
                  <img src={item.img} alt="icons" width={40} className="icon-skills" />
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* <div className="wrapper-skills-menu">
        <div className="menu-skills">
          <p>Menu Skill</p>
        </div>

        <div className="menu-skills">
          <p>Menu Skill</p>
        </div>
      </div> */}
    </section>
  );
}

export default Skills;
