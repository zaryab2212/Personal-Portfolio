import axios from "axios";

export const getSkills = async () => {
  const data = await axios.get("/skill");
  return data;
};

export const AddSkill = async (data) => {
  const res = await axios.post("/skill", data, { withCredentials: true });
  return res;
};

export const removeSkill = async (id) => {
  const res = await axios.delete("/skill/" + id, { withCredentials: true });
  return res;
};

export const updateSkill = async (id, data) => {
  const res = await axios.patch("/skill/" + id, data, {
    withCredentials: true,
  });
  return res;
};
