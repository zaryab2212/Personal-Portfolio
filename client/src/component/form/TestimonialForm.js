import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addskillAsync,
  nullError,
  skillFormBoxClose,
  updateSkillAsync,
} from "../../redux/skills/skillSlice";
import { FaWindowClose } from "react-icons/fa";
import {
  addTestimonialAsync,
  testimonialFormClose,
  updateTestimonialAsync,
} from "../../redux/testimonials/testimonialSlice";
import { Oval } from "react-loader-spinner";

const TestimonialForm = ({
  type = "add",
  editTestimonial,
  setEditTestimonial,
  setSingle,
}) => {
  const [Val, setVal] = useState({
    name: editTestimonial?.name || "",
    designation: editTestimonial?.stars || "",
    organization: editTestimonial?.stars || "",
    comment: editTestimonial?.stars || "",
  });
  const [imgFiles, setimgFiles] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const { testimonial, loading, error, testimonialForm } = useSelector(
    (state) => state.testimonial
  );

  const navigate = useNavigate();

  const handleInput = (e) => {
    setIsSubmit(false);
    setVal({ ...Val, [e.target.name]: e.target.value });
    dispatch(nullError());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", Val?.name);
    formData.append("organization", Val?.organization);
    formData.append("designation", Val?.designation);
    formData.append("comment", Val?.comment);
    if (imgFiles) {
      for (let i = 0; i < imgFiles.length; i++) {
        formData.append("image", imgFiles[i]);
      }
    }

    try {
      if (!editTestimonial) {
        await dispatch(addTestimonialAsync(formData));
      } else {
        formData.append("id", editTestimonial._id);
        await dispatch(updateTestimonialAsync(formData));
      }
      setIsSubmit(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClose = () => {
    dispatch(nullError());
    setEditTestimonial(false);
    dispatch(testimonialFormClose());
  };

  if (isSubmit) {
    if (!error) {
      setEditTestimonial(false);
      dispatch(dispatch(testimonialFormClose()));
      setSingle(testimonial.length - 1);
    }
  }

  return (
    <div className=" relative text-mygrey bg-mybg   border-[1px] border-mytheme rounded-2xl  py-8 ">
      <FaWindowClose
        onClick={handleClose}
        className=" text-mytheme top-4 right-4 w-[1.3rem] h-[1.3rem] cursor-pointer hover:w-[1.4rem] hover:h-[1.4rem] absolute"
        //  left-2 top-2 "
      />
      <h1 className="heading mt-9 text-center">
        Add{" "}
        <span className="text-myblack">
          {editTestimonial ? "Edit your Testimonial" : "new Testimonial"}
        </span>{" "}
        here!
      </h1>
      <div className="sm:max-w-[60%] w-[90%] mt-9 m-auto">
        <form
          className="flex flex-col justify-center align-middle gap-6 mt-8"
          onSubmit={handleSubmit}
        >
          <input
            className="bg-mybg py-2 px-6 rounded-xl border-mytheme border-[2px]"
            name="name"
            value={Val?.name}
            onChange={handleInput}
            type="text"
            placeholder="Person's Name"
          />
          <input
            className="bg-mybg py-2 px-6 rounded-xl border-mytheme border-[2px]"
            name="organization"
            value={Val?.organization}
            onChange={handleInput}
            type="text"
            placeholder="Organization Name"
          />
          <input
            className="bg-mybg py-2 px-6 rounded-xl border-mytheme border-[2px]"
            name="designation"
            value={Val?.designation}
            onChange={handleInput}
            type="text"
            placeholder="Designation"
          />

          <input
            className="bg-mybg py-2 w-full  px-6 rounded-xl border-mytheme border-[2px]"
            name="imgFiles"
            // value={imgFiles}
            onChange={(e) => setimgFiles(e.target.files)}
            type="file"
            multiple
            placeholder="Add image"
          />
          <textarea
            className="bg-mybg py-2 px-6 rounded-xl border-mytheme border-[2px]"
            name="comment"
            value={Val?.comment}
            onChange={handleInput}
            type="text"
            placeholder="Please type breif comment"
          />

          {error && (
            <p className="text-red-600 px-4">
              {" "}
              {error?.message || error.error.message}
            </p>
          )}

          <button className="py-2 px-6 rounded-xl border-mytheme bg-mytheme text-center border-[2px] text-white ">
            {loading ? (
              <div className="text-mythem mt-[-4] pt-[-3] w-10 m-auto">
                <Oval
                  visible={true}
                  secondaryColor="##ffffff"
                  height="30"
                  width="30"
                  strokeWidth={3}
                  color="#ffffff"
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            ) : editTestimonial ? (
              "Edit"
            ) : (
              "ADD"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestimonialForm;
