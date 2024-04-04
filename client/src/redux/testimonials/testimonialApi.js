import axios from "axios";

export const getTestimonials = async () => {
  const data = await axios.get("/testimonial");
  return data;
};
export const addTestimonial = async (data) => {
  const res = await axios.post("/testimonial/add", data, {
    withCredentials: true,
  });
  return res;
};
export const updateTestimonial = async (id, data) => {
  const res = await axios.patch("/testimonial/" + id, data, {
    withCredentials: true,
  });
  return res;
};
export const removeTestimonial = async (id) => {
  const res = await axios.delete("/testimonial/" + id, {
    withCredentials: true,
  });
  return res;
};
