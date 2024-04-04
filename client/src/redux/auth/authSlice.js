import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getUserFunc,
  logOutUserFunc,
  loginFunc,
  registerFunc,
} from "./authApi";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const registerFuncAsync = createAsyncThunk(
  "auth/registerFunc",
  async (data, { rejectWithValue }) => {
    try {
      const res = await registerFunc(data);
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const loginFuncAsync = createAsyncThunk(
  "auth/loginFunc",
  async (data, { rejectWithValue }) => {
    try {
      const res = await loginFunc(data);
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getUserFuncAsync = createAsyncThunk(
  "auth/getUserFunc",
  async (data, { rejectWithValue }) => {
    try {
      const res = await getUserFunc(data);
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logOutUserFuncAsync = createAsyncThunk(
  "auth/logOutUserFunc",
  async (data, { rejectWithValue }) => {
    try {
      const res = await logOutUserFunc(data);
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginFuncAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginFuncAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginFuncAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerFuncAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerFuncAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerFuncAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //get User
      .addCase(getUserFuncAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUserFuncAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUserFuncAsync.rejected, (state, action) => {
        state.loading = false;
      })

      //logOut
      .addCase(logOutUserFuncAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logOutUserFuncAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logOutUserFuncAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
