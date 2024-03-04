import React from 'react'
import Buttons from './Buttons'
const Buttonlist = () => {
  const list=["All","Live","Gaming","Music","TeluguCinema","GATE Exam","Alogorithms","JEE MAIN","UPSC","PUBG","Asian Music"]
  return (
    <div className='flex'>
       {list.map((item,id)=>{
        return <Buttons key={id} name={item}/>
       })}
    </div>
  )
}

export default Buttonlist
