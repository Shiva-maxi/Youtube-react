import React, { useEffect, useState } from 'react'
import { youtubeapi } from '../utils/constants';
import Vid from './Vid';
import { Link } from 'react-router-dom';
const Videocontainer = () => {

  const [videos,setVideos]=useState([]);
   useEffect(()=>{
      getvideos();
   },[])

  const getvideos=async ()=>{
    const data=await fetch(youtubeapi);
    const videodata=await data.json();
    console.log(videodata.items);
    setVideos(videodata.items);
  }
  return (
    <div className='flex flex-wrap'>
      {videos.map((video)=>(
         <Link to={'/watch?v='+video.id}><Vid info={video} key={video.id}/></Link>
      ))}
      
    </div>
  )
}

export default Videocontainer

