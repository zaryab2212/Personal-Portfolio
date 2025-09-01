import React from "react";
// import helloImage from "../assest/img/hello.gif"

const Welcome = () => {
  return (
    <div className="welcome_container" id="welcome">
      <div className="welcome-left">
        <h1 className="heading">
          Welcome to <span className="text-mygrey">Zaryab’s</span> MERN Site!
        </h1>
        <section id="about" class="about-section">
          <p>
            I’m <strong>Muhammad Zaryab Ikram</strong>, a passionate
            <strong>Full-Stack Developer (MERN)</strong> with 4+ years of
            experience building scalable, high-performance web applications. I
            specialize in
            <strong>React, Next.js, Node.js, Express, and NestJS</strong>, with
            a strong background in modern frontend and backend development.
          </p>

          <p>
            I’ve helped companies in{" "}
            <strong>e-commerce, SaaS, and social networking</strong>
            improve performance and reliability — reducing API latency by up to
            <strong>60%</strong>, cutting production errors by{" "}
            <strong>95%</strong>, and speeding up delivery by{" "}
            <strong>40%</strong>.
          </p>
          <div className="my-5">
            <strong>My Expertise</strong>
            <ul>
              <li>
                <strong>Frontend:</strong> React, Next.js, Redux Toolkit,
                Tailwind CSS
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express, NestJS, REST,
                GraphQL
              </li>
              <li>
                <strong>Databases:</strong> MongoDB, PostgreSQL, MySQL, Redis
              </li>
              <li>
                <strong>DevOps & Deployment:</strong> Docker, GitHub Actions,
                AWS, Vercel, Firebase
              </li>
              <li>
                <strong>Security & Auth:</strong> JWT, OAuth 2.0, Passport.js
              </li>
            </ul>
          </div>

          <p>
            I love creating{" "}
            <strong>
              clean, reusable components, optimized APIs, and user-friendly
              interfaces
            </strong>
            that solve real-world problems. Whether it’s an
            <strong>
              e-commerce platform, a social media app, or a SaaS product
            </strong>
            , I focus on writing scalable, maintainable code that drives
            results.
          </p>
        </section>
      </div>
      <div className="flex text-center gap-7 mt-9  justify-start align-top">
        <div className="flex flex-col border-mygrey align-top px-3 py-2 max-w-[15rem] border-[.1rem] rounded-2xl  justify-center ">
          <h2 className="text-mytheme heading font-semibold"> 4+</h2>
          <p className="text-myblack"> Years of experience </p>
        </div>
        <div className="flex flex-col border-mygrey  align-top px-3 py-2 max-w-[15rem] border-[.1rem] rounded-2xl ustify-center ">
          <h2 className="text-mytheme  heading font-semibold"> 11+</h2>
          <p className="text-myblack"> Pojects completed </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Welcome;
