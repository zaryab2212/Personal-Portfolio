import React from "react";
// import helloImage from "../assest/img/hello.gif"

const Welcome = () => {
  return (
    <div className="welcome_container" id="welcome">
      <div className="welcome-left">
        <h1 className="heading">
          Welcome to <span className="text-myblack">Zaryab’s</span> MERN Site!
        </h1>
        <p>
          My name Zaryab Ikram. I'm from Pakistan, I am a Full Stack
          Developer.(MERN)
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
          Driven by my passion for web development, I actively engage in online
          courses and workshops to expand my knowledge and skills. This
          commitment to continuous learning enables me to stay at the forefront
          of industry advancements and deliver high-quality solutions.
          <br />
          I take immense pride in my portfolio, which showcases a collection of
          my best work. Each project reflects my dedication to excellence,
          combining elegant designs with seamless functionality.
          <br />
          If you have a web development project or are interested in
          collaborating, I would be delighted to connect with you. Feel free to
          reach out to me through email or connect with me on social media.
          Let's bring your ideas to life and create exceptional digital
          experiences together."
          <br />
        </p>
      </div>
      <div className="flex text-center gap-7 mt-9  justify-start align-top">
        <div className="flex flex-col border-mygrey align-top px-3 py-2 max-w-[15rem] border-[.1rem] rounded-2xl  justify-center ">
          <h2 className="text-mytheme heading font-semibold"> 1+</h2>
          <p className="text-myblack"> Years of experience in webdevelopment</p>
        </div>
        <div className="flex flex-col border-mygrey  align-top px-3 py-2 max-w-[15rem] border-[.1rem] rounded-2xl ustify-center ">
          <h2 className="text-mytheme  heading font-semibold"> 7+</h2>
          <p className="text-myblack">
            {" "}
            Pojects completed for personal as well as for clients{" "}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Welcome;
