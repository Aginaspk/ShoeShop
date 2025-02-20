import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";

const INITIAL_STATE = {
  products: [],
  productById:{},
  loading: true,
  error: null,
};

export const newProduct = createAsyncThunk(
  "products/newProduct",
  async (form, { rejectWithValue }) => {
    try {
      const response = await api.post("/admin/product/create", form, {
        timeout: 60000,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/newProduct",
  async ({id,formData}, { rejectWithValue }) => {
    try {
      const response = await api.put(`/admin/product/update/${id}`, formData, {
        timeout: 60000,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/admin/products");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.get(`/admin/product/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/admin/product/bin/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(getProductById.pending,(state)=>{
        state.loading = true;
      })
      .addCase(getProductById.fulfilled,(state,action)=>{
        state.loading = false;
        state.productById = action.payload;
      })
      .addCase(getProductById.rejected,(state,action)=>{
        state.loading = true;
        state.error = action.payload;
      })
  },
});

export default productSlice.reducer;
