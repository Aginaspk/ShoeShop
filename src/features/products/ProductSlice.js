import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    filterProduct: 'all',
    products: [],
    status: 'idle',
    error: null,

}


const productSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        setFilterShoe: (state, action) => {
            state.filterProduct = action.payload;
        }, 
        setProducts: (state, action) => {
            state.products = action.payload;
            state.status = 'succeeded';
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.status = 'failed';
        },
    },


})

export const { setFilterShoe,setProducts,setStatus,setError } = productSlice.actions;
export default productSlice.reducer;