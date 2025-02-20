import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";

const INITIAL_STATE = {
  users: {},
  user:{},
  loading: false,
  error: null,
};

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/admin/users");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const getUserId = createAsyncThunk(
  "user/getUserId",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/admin/user/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const userBlock = createAsyncThunk(
  "user/userBlock",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/admin/user/block/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(getUserId.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUserId.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
  },
});

export default userSlice.reducer;
