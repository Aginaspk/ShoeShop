import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const INITIAL_STATE = {
  cart: {},
  loading: false,
  error: null,
  updateResponse:{},
};

export const getUserCart = createAsyncThunk(
  "cart/getUserCart",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/user/cart");
      return data.cartItems;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async (product, { rejectWithValue }) => {
    try {
      const response = await api.post("/user/cart", product);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const deleteCartItem = createAsyncThunk("cart/deleteCartItem",async(id,{rejectWithValue})=>{
  try {
    const response = await api.delete(`/user/cart/${id}`)
    return id;
  } catch (error) {
    return rejectWithValue(
      error.response ? error.response.data.message : error.message
    );
  }
})

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateCart.fulfilled,(state,action)=>{
        state.updateResponse = action.payload;
      })
      .addCase(deleteCartItem.fulfilled,(state,action)=>{
        state.cart.products = state.cart.products.filter(item=>item._id !== action.payload)
      })
  },
});

export default cartSlice.reducer;
