import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import store from '../utils/store'
const Sidebar = () => {

     const menuopen=useSelector(store=>store.app.ismenuopen)
     if(!menuopen){
      return null;
     }
  return (
    <div className='shadow-lg w-48 p-5'>
      <a href="/"><h1 className='font-bold'>Home</h1></a>
      <h1>Shorts</h1>
      <h1 className='font-bold py-5'>Watch Later</h1>
      <h1 className='font-bold py-2'>Liked Videos</h1>
      <h1 className='font-bold pt-5'>Subsriptions</h1>
      <ul>
        <li>Unq Gamer</li>
        <li>Mortal</li>
        <li>Mr Beast</li>
        <li>Unacademy</li>
      </ul>
    </div>
  )
}

export default Sidebar
