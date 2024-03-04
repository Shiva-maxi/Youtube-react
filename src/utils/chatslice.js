import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const Chatslice=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(10,1);
            state.messages.unshift(action.payload)
        }
    }
});


export const {addMessage}=Chatslice.actions;
export default Chatslice.reducer;