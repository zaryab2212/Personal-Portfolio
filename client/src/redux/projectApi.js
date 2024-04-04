import axios from "axios";
export const getAllProjects = async () => {
  const { data } = await axios.get("/project/", { withCredentials: true });
  return data;
};

export const addProject = async (dataa) => {
  const { data } = await axios.post("/project/add", dataa, {
    withCredentials: true,
  });
  return data;
};

export const UpdateProject = async (id, dataa) => {
  const { data } = await axios.patch("/project/" + id, dataa, {
    withCredentials: true,
  });
  return data;
};

export const deleteProject = async (id) => {
  const { data } = await axios.delete("/project/" + id, {
    withCredentials: true,
  });
  return data;
};
