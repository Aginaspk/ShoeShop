import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const INITIAL_STATE = {
  orders: {},
  stripe: {},
  loading: false,
  error: false,
};


export const stripeOrder = createAsyncThunk(
  "order/stripeOrder",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.post("/user/order/stripe/checkout");
      window.location.href = res.data.stripeURL;
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const verifyPayment = createAsyncThunk(
  "order/verifyOrder",
  async (sessionId, { rejectWithValue }) => {
    try {
      const res = await api.patch(`/user/order/stripe/success/${sessionId}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(stripeOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(stripeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.stripe = action.payload;
      })
      .addCase(stripeOrder.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(verifyPayment.pending,(state)=>{
        state.loading = true;
      })
      .addCase(verifyPayment.fulfilled,(state)=>{
        state.loading = false;
      })
      .addCase(verifyPayment.rejected,(state)=>{
        state.loading = true;
      })

  },
});

export default orderSlice.reducer;
