import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const searchslice=createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cache:(state,action)=>{
            state={...state,...action.payload}
        }
    }
});


export const {cache} = searchslice.actions;

export  default searchslice.reducer;
