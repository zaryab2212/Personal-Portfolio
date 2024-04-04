import axios from "axios";

export const loginFunc = async (userData) => {
  const { data } = await axios.post("/auth/login", userData);
  return data;
};

export const registerFunc = async (userData) => {
  const { data } = await axios.post("/auth/register", userData);
  return data;
};

export const getUserFunc = async () => {
  const { data } = await axios.get("/auth/", { withCredentials: true });
  return data;
};

export const logOutUserFunc = async () => {
  const { data } = await axios.get("/auth/logout", { withCredentials: true });
  return data;
};
