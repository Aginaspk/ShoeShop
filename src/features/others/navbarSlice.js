import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    searchInput:'',
}

const navbarSlice = createSlice({
    name:'navbar',
    initialState:INITIAL_STATE,
    reducers:{
        setSearchInput:(state,action)=>{
            state.searchInput = action.payload;
        }
    }
})

export const {setSearchInput} = navbarSlice.actions;
export default navbarSlice.reducer;