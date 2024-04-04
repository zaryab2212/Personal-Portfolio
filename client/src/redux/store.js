import { configureStore } from "@reduxjs/toolkit";
import project from "./projectSlice";
import auth from "./auth/authSlice";
import skill from "./skills/skillSlice";
import testimonial from "./testimonials/testimonialSlice";

export const store = configureStore({
  reducer: {
    auth,
    project,
    skill,
    testimonial,
  },
});
