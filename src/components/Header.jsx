import React from "react";

import about from './../assets/about.svg'
import works from './../assets/works.svg'
import projects from './../assets/projects.svg'
import researchs from './../assets/researchs.svg'

function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="navbar-item">
          <img src={about}/>
          <p>About</p>
        </div>
        <div className="navbar-item">
          <img src={works}/>
          <p>Works</p>
        </div>
        <div className="navbar-item">
          <img src={projects}/>
          <p>Projects</p>
        </div>
        <div className="navbar-item">
          <img src={researchs}/>
          <p>Researchs</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
