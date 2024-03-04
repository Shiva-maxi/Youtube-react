import React from 'react'

const Chatmessage = ({name,message}) => {
  return (
    <div className='flex pb-4'>
        <img className="h-[28px]"src="https://a0.anyrgb.com/pngimg/608/1960/user-profile-login-avatar-heroes-user-youtube-male-silhouette-monochrome-smile.png"></img>
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
      <img  className="h-[20px] w-auto"src="https://cdn-icons-png.flaticon.com/512/5537/5537993.png"></img>
    </div>
  )
}

export default Chatmessage
