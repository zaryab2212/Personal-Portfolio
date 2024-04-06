import React from "react";
// import helloImage from "../assest/img/hello.gif"

const Welcome = () => {
  return (
    <div className="welcome_container" id="welcome">
      <div className="welcome-left">
        <h1 className="heading">
          Welcome to <span className="text-mygrey">Zaryab’s</span> MERN Site!
        </h1>
        <p>
          My name Zaryab Ikram. I'm from Pakistan, I'm graducated in BS
          Information Technology. I am experienced a Full Stack Developer(MERN)
          having 7 months of experience successfully deliver various projects.
        </p>
        <p>
          Proficient in front-end development, I have a strong command of{" "}
          <b>HTML</b> , <b>CSS</b>, and <b>JavaScript</b>, experience in{" "}
          <b>React</b> along the backend like <b>Node</b>, <b>Express</b> and{" "}
          <b>MongoDB</b> Throughout my journey, <br /> I have successfully
          completed various projects, ranging from responsive website designs to
          interactive web applications, all aimed at providing seamless user
          experiences. <br />
          I thrive on solving complex challenges and approach web development
          with creativity and innovation. Collaborating effectively with teams,
          clients, and stakeholders is a core aspect of my work, ensuring the
          successful delivery of projects. <br />
        </p>
      </div>
      <div className="flex text-center gap-7 mt-9  justify-start align-top">
        <div className="flex flex-col border-mygrey align-top px-3 py-2 max-w-[15rem] border-[.1rem] rounded-2xl  justify-center ">
          <h2 className="text-mytheme heading font-semibold"> 1+</h2>
          <p className="text-myblack"> Years of experience </p>
        </div>
        <div className="flex flex-col border-mygrey  align-top px-3 py-2 max-w-[15rem] border-[.1rem] rounded-2xl ustify-center ">
          <h2 className="text-mytheme  heading font-semibold"> 7+</h2>
          <p className="text-myblack"> Pojects completed </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Welcome;
