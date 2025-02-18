import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import api from "../../../api/api";

const INITIAL_STATE = {
  products: [],
  loading: true,
  error: null,
};

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

const productSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending,(state)=>{
      
    })
  },
});


export default productSlice.reducer;