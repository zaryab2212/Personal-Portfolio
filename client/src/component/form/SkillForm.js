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
import { FallingLines, Oval } from "react-loader-spinner";

const SkillForm = ({ type = "add", editProduct, setEditProduct }) => {
  const [Val, setVal] = useState({
    name: editProduct?.name || "",
    stars: editProduct?.stars || 5,
  });
  const [imgFiles, setimgFiles] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const { skill, loading, error, formOpen } = useSelector(
    (state) => state.skill
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
    formData.append("stars", Val?.stars);
    if (imgFiles) {
      for (let i = 0; i < imgFiles.length; i++) {
        formData.append("image", imgFiles[i]);
      }
    }

    try {
      if (!editProduct) {
        await dispatch(addskillAsync(formData));
      } else {
        formData.append("id", editProduct._id);
        await dispatch(updateSkillAsync(formData));
      }
      setIsSubmit(true);
    } catch (error) {
      console.error("Error:", error);
      // Handle error if necessary
    }
  };

  const handleClose = () => {
    dispatch(nullError());
    setEditProduct(false);
    dispatch(skillFormBoxClose());
  };

  if (isSubmit) {
    if (!error) {
      setEditProduct(false);
      dispatch(skillFormBoxClose());
    }
  }

  return (
    <div className="bg-mybg  relative  border-[1px] border-mytheme rounded-2xl  py-8 ">
      <FaWindowClose
        onClick={handleClose}
        className="text-mytheme top-4 right-4 w-[1.3rem] h-[1.3rem] cursor-pointer hover:w-[1.4rem] hover:h-[1.4rem] absolute"
        //  left-2 top-2 "
      />
      <h1 className="heading mt-9 text-center">
        Please{" "}
        <span className="text-myblack">
          {editProduct ? "Edit your Skill" : "Add new Skill"}
        </span>{" "}
        here!
      </h1>
      <div className="sm:max-w-[60%] w-[90%] mt-9 m-auto">
        <form
          className="flex flex-col text-mygrey justify-center align-middle gap-6 mt-8"
          onSubmit={handleSubmit}
        >
          <input
            className="py-2  bg-mybg px-6 rounded-xl border-mytheme border-[2px]"
            name="name"
            value={Val?.name}
            onChange={handleInput}
            type="text"
            placeholder="Name"
            required
          />
          <select
            name="stars"
            placeholder={"jfdkjdfkj"}
            value={Val.stars}
            onChange={handleInput}
            className="py-2 bg-mybg  px-6 rounded-xl border-mytheme border-[2px]"
          >
            {new Array(5).fill().map((e, i) => (
              <>
                <option selected value={i + 1}>
                  {i + 1}
                </option>
              </>
            ))}
          </select>

          <input
            className="py-2 w-full bg-mybg    px-6 rounded-xl border-mytheme border-[2px]"
            name="imgFiles"
            // value={imgFiles}
            onChange={(e) => setimgFiles(e.target.files)}
            type="file"
            multiple
            placeholder="Add image"
          />

          {error && (
            <p className="text-red-600 px-4">
              {" "}
              {error?.response?.data ? error?.response?.data : error?.message}
            </p>
          )}

          <button className="py-2 px-6 border-mybg rounded-xl bg-mytheme text-center border-[2px] text-white ">
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
            ) : editProduct ? (
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

export default SkillForm;
