import React, { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import { useDispatch, useSelector } from "react-redux";
import {
  getTestimonialsAsync,
  testimonialFormOpen,
} from "../redux/testimonials/testimonialSlice";
import TestimonialForm from "./form/TestimonialForm";
import AddNewForm from "./AddNewForm";

const Testimonials = () => {
  const [single, setSingle] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [editTestimonial, setEditTestimonial] = useState(false);
  const dispatch = useDispatch();
  const { testimonial, testimonialForm } = useSelector(
    (state) => state.testimonial
  );

  const handleNext = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      testimonial.length - 1 > single ? setSingle(single + 1) : setSingle(0);
    }, 500);
  };
  const handlePrev = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      single > 0 ? setSingle(single - 1) : setSingle(testimonial.length - 1);
    }, 500);
    // setAnimate(false);
  };

  useEffect(() => {
    dispatch(getTestimonialsAsync());
  }, []);

  return (
    <div className="">
      <div className="mt-3 ">
        <h1 className="heading font-semibold m-4 text-start">Testimonials</h1>

        <AddNewForm
          func={() => dispatch(testimonialFormOpen())}
          type={"Testionial"}
        />
      </div>
      {/* {data.map((e) => {
        return ( */}
      <div className={`${animate ? "animate-ping ease-in-out" : ""}`}>
        <Testimonial
          data={testimonial && testimonial[single]}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
      {testimonialForm && (
        <div className=" fixed z-40 w-[90%] sm:w-[65%] left-[5%]  top-5 sm:left-[22%] h-[80rem]">
          <TestimonialForm
            editTestimonial={editTestimonial}
            setEditTestimonial={setEditTestimonial}
            setSingle={setSingle}
          />
        </div>
      )}
    </div>
  );
};

export default Testimonials;
