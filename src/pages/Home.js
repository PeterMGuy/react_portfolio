import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello, My Name is Peter</h2>
        
        <div className="picture">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFOzh3GVchykA/profile-displayphoto-shrink_800_800/0/1656426261744?e=1667433600&v=beta&t=YkCN6BMVmshBlrKmH5wQRjvXIy74hOshgSMW5iqF8v4" alt="profile" width="" height="250"/>
        </div>

        <div className="prompt">
          <p>An upcoming software engineer with a passion for learning and creating.</p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, JavaScript, NPM,
              BootStrap, MaterialUI, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS,
              MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, ReactJS</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;