import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import AddProject from "./pages/AddProject";
import SkillForm from "./component/form/SkillForm";
import SkillFormPage from "./pages/SkillFormPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserFuncAsync } from "./redux/auth/authSlice";

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserFuncAsync());
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/skill-edit" element={<SkillFormPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
