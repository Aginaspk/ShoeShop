import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";

const INITIAL_STATE = {
  status: {},
  loading: true,
  error: null,
};

export const getStatus = createAsyncThunk(
  "status/getStatus",
  async (_, { rejectWithValue }) => {
    try {
        const {data} = await api.get('/admin/order/status');
        return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

const statusSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getStatus.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(getStatus.fulfilled, (state, action) => {
          state.loading = false;
          state.status = action.payload;
        })
        .addCase(getStatus.rejected, (state, action) => {
          state.loading = true;
          state.error = action.payload;
        });
    },
  });

  export default statusSlice.reducer;
