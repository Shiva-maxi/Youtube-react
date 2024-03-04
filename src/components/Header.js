import React, { useEffect, useState } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { togglemenu } from "../utils/appslice";
import { youtubesuggestionsapi } from "../utils/constants";
import { cache } from "../utils/Searchslice";
import store from "../utils/store";
const Header = () => {
    const dispatch=useDispatch();
    const togglehandler=()=>{
      dispatch(togglemenu());
    }
    const [searchquery,setSearchquery]=useState("");
    const [searchresults,setSearchresults]=useState([]);
    const [showsuggestions,setShowsuggestions]=useState(true);
    const searchcache=useSelector((store)=>store.search);
    useEffect(()=>{
      console.log(searchquery); 
      const timer=setTimeout(()=>{
        if(searchcache[searchquery]){
          setShowsuggestions(searchcache[searchquery])
        }
        else{
          getsearchqueryresults();
        }
        
      },200);

      return ()=>{
        clearTimeout(timer);
      }
    },[searchquery]);
    const getsearchqueryresults=async ()=>{
      const data=await fetch(youtubesuggestionsapi+searchquery);
      const maindata=await data.json();
      
      dispatch(cache(
        {
          searchquery:maindata[1],
        }
      ))
      setSearchresults(maindata[1]);
      console.log(maindata[1]);
    }
    
  return (
    <div className=" grid grid-flow-col p-2 m-2 shadow-lg">
        
      <div className="flex col-span-1">
         
        <img onClick={()=>togglehandler()}
          className="h-8 m-3 cursor-pointer"
          src="data:image/png;base64,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"
        ></img>
         <a href="/">
      <img
        className="h-14 mx-1"
        src="data:image/png;base64,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"
      ></img>
      </a>
      </div>
      <div className="col-span-11 m-3">
        
        <input onFocus={()=>setShowsuggestions (true)} onBlur={()=>setShowsuggestions(false)} value={searchquery} onChange={(e)=>setSearchquery(e.target.value)} type="text" class="w-1/2 border border-gray-700 p-1 rounded-l-full" />
        <button className="border border-gray-700 p-1 rounded-r-full"> 🔍</button>
          {showsuggestions && <div className="bg-white fixed  rounded-md w-[33%]">
          <ul>
            {searchresults.map((result)=>(
              <li className="px-3 pt-2 shadow-lg cursor-pointer" key={result}>🔍{result}</li>
            ))}
          </ul>
        </div>} 
        
      </div>
      <div className="col-span-2">
        <img
          className="h-8 mt-3"
          src="https://w7.pngwing.com/pngs/831/216/png-transparent-computer-icons-youtube-youtube-logo-profile-avatar-area.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
