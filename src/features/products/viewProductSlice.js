import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    displayImage: 0
}

const viewProductSlice = createSlice({
    name:'viewProduct',
    initialState:INITIAL_STATE,
    reducers:{
        setDisplayImage: (state,action)=>{
            state.displayImage = action.payload;
        }
    }
})

export const {setDisplayImage} = viewProductSlice.actions;
export default viewProductSlice.reducer;