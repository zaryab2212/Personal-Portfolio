import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container   p-[mt-9]" id="home">
      <div className="header-left">
        <div className="profile-image">
          <img src={"/images/Profile.png"} />
        </div>
      </div>
      <div className="header-right">
        <div className="header-right-content">
          <h3>Full Stack Developer</h3>
          <h1>Zaryab Ikram</h1>
          <p>
            Hello! I'm Zaryab Ikram, a dedicated MERN stack developer with a
            Bachelor of Science in Information Technology from the University of
            Sargodha. Over the past six months, I've immersed myself in the
            world of MERN stack development, building a variety of projects both
            for personal enrichment and professional endeavors. I'm passionate
            about leveraging cutting-edge technologies to create innovative
            solutions and enhance user experiences.
          </p>
          <div className="header-right-button">
            <a
              href="Zaryab_Ikram_Mern_Stack1.pdf"
              download="Zaryab_Ikram_Mern_Stack1.pdf"
            >
              <button>Resume</button>
            </a>
            <a href="#contact">
              <button>Contact</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
