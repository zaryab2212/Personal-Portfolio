import React, { Suspense, lazy, useEffect } from "react";
import { MdOutlineMenu } from "react-icons/md";
import HorizonalLine from "../component/horizonalLine";
import Header from "../component/header/Header";
import Welcome from "../component/wellcome/Welcome";
import Education from "../component/education/Education";
import Skills from "../component/skill/Skills";
import Project from "../component/project/Project";
import Contact from "../component/contact/Contact";
import Footer from "../component/footer/Footer";
import { useState } from "react";
import { CgCloseR } from "react-icons/cg";
// import Specializion from "../component/specialization/Specializion";
import Testimonial from "../component/Testimonial";
import Testimonials from "../component/Testimonials";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUserFuncAsync } from "../redux/auth/authSlice";
import { Circles, Oval } from "react-loader-spinner";
import { getSkillsAsync } from "../redux/skills/skillSlice";
import { getAllProjectsAsync } from "../redux/projectSlice";
import { getTestimonialsAsync } from "../redux/testimonials/testimonialSlice";
import SkillLoading from "../component/skill/SkillLoading";

const Specializion = lazy(() =>
  import("../component/specialization/Specializion")
);

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { loading: projectLoad } = useSelector((state) => state.project);
  const { loading: skillLoad } = useSelector((state) => state.skill);
  const { loading: testimonialLoad } = useSelector(
    (state) => state.testimonial
  );
  const tuhi = true;
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUserFuncAsync());
  };

  return (
    <>
      <>
        {openMenu && (
          <div className="menu_container  h-full">
            <button onClick={() => setOpenMenu(false)} className="close">
              <CgCloseR />
            </button>

            <a href="#home">Home</a>
            <a href="#project">Project</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
            <a href="#welcome">About</a>
            {!user && <Link to="/login">Login</Link>}
            {!user && <Link to="/register">Register</Link>}
            {user && (
              <Link to="/" onClick={() => dispatch(logOutUserFuncAsync())}>
                Logout
              </Link>
            )}
          </div>
        )}

        <header>
          <div className="top">
            <div className="logo "></div>
            <MdOutlineMenu
              className="burger-menu text-mygrey"
              onClick={() => setOpenMenu(true)}
            />
          </div>
          <Header />
        </header>
        <main>
          <HorizonalLine />
          <Welcome />
          <div className="horizontal_reverse">
            <HorizonalLine />
          </div>
          <Skills />
          <HorizonalLine />
          <Project />
          <div className="horizontal_reverse">
            <HorizonalLine />
          </div>
          <Suspense fallback={() => {}}>
            <Specializion />
          </Suspense>
          <div className="horizontal_reverse">
            <HorizonalLine />
          </div>
          <Education />
          <HorizonalLine />

          <Testimonials />
          <div className="horizontal_reverse">
            <HorizonalLine />
          </div>
          <Contact />
        </main>
        <Footer />
      </>
    </>
  );
};

export default Home;
