import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";

const INITIAL_STATE = {
  orders: {},
  orderById: {},
  idLoading: false,
  idError: null,
  loading: false,
  error: null,
};

export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/admin/orders");
      console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const getOrderById = createAsyncThunk(
  "orders/getOrderById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/admin/order/user/${id}`);      
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

const orderSliceAdmin = createSlice({
  name: "orders",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(getOrderById.pending, (state, action) => {
        state.idLoading = true;
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.idLoading = false;
        state.orderById = action.payload;
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.idLoading = true;
        state.idError = action.payload;
      });
  },
});

export default orderSliceAdmin.reducer;
