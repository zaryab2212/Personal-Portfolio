import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  UpdateProject,
  addProject,
  deleteProject,
  getAllProjects,
} from "./projectApi";

// All project
export const getAllProjectsAsync = createAsyncThunk(
  "project/getAllProjects",
  async (s, { rejectWithValue }) => {
    try {
      const data = await getAllProjects();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Add
export const addProjectAsync = createAsyncThunk(
  "project/addProject",
  async (dataa, { rejectWithValue }) => {
    try {
      const data = await addProject(dataa);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update
export const UpdateProjectAsync = createAsyncThunk(
  "project/UpdateProject",
  async (id, { rejectWithValue }) => {
    try {
      const data = await UpdateProject(id.id, id.formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//delete
export const deleteProjectAsync = createAsyncThunk(
  "project/deleteProject",
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteProject(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  projects: [],
  error: null,
  loading: false,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    nullError: (state, action) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProjectsAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllProjectsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(getAllProjectsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //add project
      .addCase(addProjectAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addProjectAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.projects.push(action.payload);
      })
      .addCase(addProjectAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //Update Project
      .addCase(UpdateProjectAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(UpdateProjectAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.projects.findIndex(
          (ind) => ind._id === action.payload._id
        );
        state.projects.splice(index, 1, action.payload);
      })
      .addCase(UpdateProjectAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //delete
      .addCase(deleteProjectAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteProjectAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.projects.findIndex(
          (ind) => ind._id === action.payload._id
        );
        state.projects.splice(index, 1);
      })
      .addCase(deleteProjectAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { nullError } = projectSlice.actions;

export default projectSlice.reducer;
