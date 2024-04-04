import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addTestimonial,
  getTestimonials,
  removeTestimonial,
  updateTestimonial,
} from "./testimonialApi";

export const getTestimonialsAsync = createAsyncThunk(
  "testimonial/getTestimonials",
  async (a, { rejectWithValue }) => {
    try {
      const { data } = await getTestimonials();
      return data.testimonial;
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);
export const addTestimonialAsync = createAsyncThunk(
  "testimonial/addTestimonial",
  async (dataa, { rejectWithValue }) => {
    try {
      const { data } = await addTestimonial(dataa);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);
export const updateTestimonialAsync = createAsyncThunk(
  "testimonial/updateTestimonial",
  async (id, dataa, { rejectWithValue }) => {
    try {
      const { data } = await updateTestimonial(id, dataa);
      return data.testimonial;
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);
export const removeTestimonialAsync = createAsyncThunk(
  "testimonial/removeTestimonial",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await removeTestimonial(id);
      return data.testimonial;
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

const initialState = {
  testimonial: [],
  error: null,
  loading: false,
  testimonialForm: false,
};

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {
    nullError: (state, action) => {
      state.error = null;
    },
    testimonialFormOpen: (state, action) => {
      state.testimonialForm = true;
    },
    testimonialFormClose: (state, action) => {
      state.testimonialForm = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTestimonialsAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTestimonialsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonial = action.payload;
      })
      .addCase(getTestimonialsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //add project
      .addCase(addTestimonialAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addTestimonialAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.testimonial.push(action.payload);
      })
      .addCase(addTestimonialAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //remove project
      .addCase(removeTestimonialAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(removeTestimonialAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.testimonial = state.testimonial.filter(
          (d) => d._id !== action.payload._id
        );
      })
      .addCase(removeTestimonialAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //update project
      .addCase(updateTestimonialAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateTestimonialAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.testimonial = state.testimonial.map((d) =>
          d._id === action.payload._id ? action.payload : d._id
        );
      })
      .addCase(updateTestimonialAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { nullError, testimonialFormOpen, testimonialFormClose } =
  testimonialSlice.actions;

export default testimonialSlice.reducer;
