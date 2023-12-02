import React from "react";
import email from "../assets/email.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

function Footer() {
  return (
    <footer>
      <div id="copyright">
        <p>Designed & Developed by Muhammad Alif Darmamulia</p>
      </div>
      <div id="social-media">
        <p>Contact Me:</p>
        <a href="mailto:m.alifdarmamulia@gmail.com">
          <img src={email} />
        </a>
        <a href="https://github.com/alif338" target="_blank">
          <img src={github} />
        </a>
        <a href="https://www.instagram.com/aliefdharm/" target="_blank">
          <img src={instagram} />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-alif-d/" target="_blank">
          <img src={linkedin} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
