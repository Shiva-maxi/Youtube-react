import React, { useEffect, useState } from "react";
import Chatmessage from "./Chatmessage";
import store from "../utils/store";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatslice";
import { generate } from "../utils/helper";
const Livechat = () => {
  const dispatch = useDispatch();
  const chatmessages = useSelector((store) => store.chat.messages);
  const [sendmessage, setSendmessage] = useState( "");
  useEffect(() => {
    const interval = setInterval(() => {
      // console.log('api polling') after 200msec api gets called
      dispatch(
        addMessage({
          name: generate(),
          message: "I am good boy .Lorem ipskdblsd lnclnclasl",
        })
      );
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div>
        <div className="border border-black 2px w-full h-[500px] p-3 ml-2 rounded-lg overflow-y-scroll flex flex-col-reverse bg-slate-100">
          {chatmessages.map((m) => (
            <Chatmessage name={m.name} message={m.message} />
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name:"shiva",
            message:sendmessage,
          }));
          setSendmessage("")
        }}
      >
        <div className="border border-black w-full p-2 ml-2">
          <input
            type="text"
            value={sendmessage}
            onChange={(e) => setSendmessage(e.target.value)}
            className="w-95 border border-black"
          />
          <button className="px-2 mx-2 bg-green-100">Send</button>
        </div>
      </form>
    </>
  );
};

export default Livechat;
