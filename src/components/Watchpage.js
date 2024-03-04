import React from "react";
import { useSearchParams } from "react-router-dom";
import { UseDispatch, useDispatch } from "react-redux";
import { useEffect } from "react";
import { closemenu } from "../utils/appslice";
import Livechat from "./Livechat";
import Commentcontainer from "./Commentcontainer";
const Watchpage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closemenu());
  });
  return (
    <>
    <div className="flex flex-col w-full">
      <div className="px-5 flex ">
        <div>
          <iframe
            className=""
            width="1100"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full">
          <Livechat />
        </div>
        
      </div>
      
      <Commentcontainer />
    </div>
   
    </>
  );
};

export default Watchpage;
