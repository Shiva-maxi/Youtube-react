import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import Searchslice from "./Searchslice";
import chatslice from "./chatslice";
const store=configureStore({
    reducer:{
        app:appslice,
        search:Searchslice,
        chat:chatslice,
    }
    
});

export default store;