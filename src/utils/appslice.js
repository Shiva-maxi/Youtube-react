import { createSlice } from "@reduxjs/toolkit";


const appslice=createSlice({
    name:"app",
    initialState:{
        ismenuopen:true
    },
    reducers:{
        togglemenu:(state)=>{
            state.ismenuopen=!state.ismenuopen;
        },
        closemenu:(state)=>{
            state.ismenuopen=false;
        }
    }
})

export const {togglemenu,closemenu}=appslice.actions;
export default appslice.reducer;