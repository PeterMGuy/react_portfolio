import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/p-moua/" target="_blank" rel="noopener noreferrer"> <LinkedInIcon /> </a>
        <a href="https://github.com/PeterMGuy" target="_blank" rel="noopener noreferrer"> <GithubIcon /> </a>
      </div>
      <p> &copy; 2022 Peter, ReactPortfolio.com</p>
    </div>
  );
}

export default Footer;