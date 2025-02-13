import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const INITIAL_STATE = {
  products: [],
  mostSoldProducts: [],
  newProduct: [],
  productsByCategory: [],
  productById: {},
  loadingById: false,
  errorById: null,
  loading: false,
  error: null,
  categoryLoading: false,
  categoryError: null,
};

export const listProducts = createAsyncThunk(
  "products/listProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/user/products");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const getProductById = createAsyncThunk(
  "productById/getProductById",
  async (id, { rejectWithValue }) => {
    console.log(id)
    try {
        const {data} = await api.get(`/user/product/${id}`);
        return data;

    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const getNewProducts = createAsyncThunk(
  "getNewProducts/newProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/user/products/new");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const mostSellingProducts = createAsyncThunk(
  "mostSoldProducts/mostSellingProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/user/products/mostSelling");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const getProductsByCategory = createAsyncThunk(
  "productsByCategory/getProductsByCategory",
  async (category, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/user/products/${category}`);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(listProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(listProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(mostSellingProducts.fulfilled, (state, action) => {
        state.mostSoldProducts = action.payload;
      })
      .addCase(getNewProducts.fulfilled, (state, action) => {
        state.newProduct = action.payload;
      })
      .addCase(getProductsByCategory.pending, (state) => {
        state.categoryLoading = true;
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.categoryLoading = false;
        state.productsByCategory = action.payload;
      })
      .addCase(getProductsByCategory.rejected, (state, action) => {
        state.categoryLoading = true;
        state.categoryError = action.payload;
      })
      .addCase(getProductById.pending, (state) => {
        state.loadingById = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loadingById = false;
        state.productById = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loadingById = true;
        state.errorById = action.payload;
      })
  },
});

export default productsSlice.reducer;
