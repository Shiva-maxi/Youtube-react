import React from 'react'

const Vid = ({info}) => {
  const {snippet,statistics}=info;
  const {channelTitle,thumbnails,title}=snippet;
  const {viewCount}=statistics;
  return (
    <div className='w-80 p-2 shadow-lg m-2' >
      <img
      src={thumbnails.medium.url}></img>
      <h1 className='font-bold'>{title}</h1>
      <h1>{channelTitle}</h1>
      <span>{viewCount} views</span>
    </div>
  )
}

export default Vid
