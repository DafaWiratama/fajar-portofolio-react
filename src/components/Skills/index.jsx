// import React, { useEffect, useState } from 'react';
// import { UilAngleDown, UilBracketsCurly, UilServerNetworkAlt } from '@iconscout/react-unicons';
import './styles.css';
// import data from '../../dummy/data';

function Skills() {
  // const [openFrontend, setOpenFrontend] = useState(false);
  // const [openBackend, setopenBackend] = useState(false);

  // const handleFrontend = () => setOpenFrontend(!openFrontend);
  // const handleBackend = () => setopenBackend(!openBackend);

  // useEffect(() => {}, [openFrontend, openBackend]);
  // console.log('fe : ', openFrontend);
  // console.log('be : ', openBackend);

  return (
    <section className="section-skills" id="skills">
      <h1>Skills</h1>
      <p>My technical level</p>
      <div className="wrapper-skills">
        <div className="skills-content">
          <div className="skills-header">
            <h1>Header</h1>
            <p>Percentage</p>
          </div>
          <div className="skills-data">
            <p>Data content</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
