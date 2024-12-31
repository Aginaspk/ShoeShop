import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    searchInput:'',
    isLoginOpen:false,
}

const navbarSlice = createSlice({
    name:'navbar',
    initialState:INITIAL_STATE,
    reducers:{
        setSearchInput:(state,action)=>{
            state.searchInput = action.payload;
        },
        setIsLoginOpen:(state,action)=>{
            state.isLoginOpen = action.payload;
        }
    }
})

export const {setSearchInput,setIsLoginOpen} = navbarSlice.actions;
export default navbarSlice.reducer;