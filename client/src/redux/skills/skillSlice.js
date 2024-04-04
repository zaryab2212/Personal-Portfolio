import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddSkill, getSkills, removeSkill, updateSkill } from "./skillApi";

export const getSkillsAsync = createAsyncThunk("skill/getSkills", async () => {
  try {
    const { data } = await getSkills();
    return data.skill;
  } catch (error) {
    return error;
  }
});

export const addskillAsync = createAsyncThunk(
  "skill/addSkill",
  async (dataa, { rejectWithValue }) => {
    try {
      const { data } = await AddSkill(dataa);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const removeSkillAsync = createAsyncThunk(
  "skill/removeSkill",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await removeSkill(id);
      return data.skill;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateSkillAsync = createAsyncThunk(
  "skill/updateSkill",
  async (dataa, { rejectWithValue }) => {
    try {
      const { data } = await updateSkill(dataa.get("id"), dataa);
      return data.skill;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  skills: [],
  error: null,
  loading: false,
  formOpen: false,
};

const skillSlice = createSlice({
  name: "skill",
  initialState,

  reducers: {
    nullError: (state, action) => {
      state.error = null;
    },
    skillFormBoxOpen: (state) => {
      state.formOpen = true;
      state.error = null;
    },
    skillFormBoxClose: (state) => {
      state.formOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSkillsAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getSkillsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.skills = action.payload;
      })
      .addCase(getSkillsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //add project
      .addCase(addskillAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addskillAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.skills = action.payload;
      })
      .addCase(addskillAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //edit skill
      .addCase(updateSkillAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateSkillAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.skills.findIndex(
          (ind) => ind._id === action.payload._id
        );
        state.skills.splice(index, 1, action.payload);
      })
      .addCase(updateSkillAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // remove Skill
      .addCase(removeSkillAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(removeSkillAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.skills = state.skills.filter((r) => r._id !== action.payload._id);
      })
      .addCase(removeSkillAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { skillFormBoxClose, skillFormBoxOpen, nullError } =
  skillSlice.actions;

export default skillSlice.reducer;
