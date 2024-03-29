import React from "react";

import about from "./../assets/about.svg";
import works from "./../assets/works.svg";
import education from "./../assets/education.svg";
import projects from "./../assets/projects.svg";
import researchs from "./../assets/researchs.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="navbar">
        <Link to={"/"}>
          <div className="navbar-item">
            <img src={about} alt="about"/>
            <p>About</p>
          </div>
        </Link>
        <Link to={"/education"}>
          <div className="navbar-item">
            <img src={education} alt="education" />
            <p>Education</p>
          </div>
        </Link>
        <Link to={"/work-experience"}>
          <div className="navbar-item">
            <img src={works} alt="works" />
            <p>Works</p>
          </div>
        </Link>
        <Link to={"/projects"}>
          <div className="navbar-item">
            <img src={projects} alt="projects" />
            <p>Projects & Volunteerings</p>
          </div>
        </Link>
        <Link to={"/researchs"}>
          <div className="navbar-item">
            <img src={researchs} alt="research" />
            <p>Researchs</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
