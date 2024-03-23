import { useState,useEffect } from 'react'
import axios from 'axios'
import NavBar from "./NavBar";



export default function Home() {
  const alphArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const[Story,setStory]=useState([]);
useEffect(()=>{
  axios.get("http://localhost:8080/Story")
  .then((data)=>{
    setStory(data.data);
  })
  .catch((error)=>{
    console.log('error',error)
  })
},[])
console.log(Story)


  return (
  <div>
     <NavBar/>
    <div className='Container flex justify-around mt-6'>
      <div>

      {Story.map( item =>(
        <div key={item.id} className='story ml-10 translate-x-20'>
             <div className='Header '>
               <h2 className='font-bold  text-base'>{item.Title}</h2>
               <p className='text-sm font-thin text-gray-400'>Loremipsum.</p> <br />
               <img src={item.image} alt="" className='w-[600px]' />
             </div>
             <div className='Description mt-2 w-[600px]'>
               <p>{item.Decription}</p>
               <p className='text-sm font-thin text-gray-400'>20th, March 2024</p> <br />
             </div>
           </div>
      ))}    

      </div>
      <div className='UpdatedStory mt-5 mr-12'>
        <div className="topstory">
          <h4 className='font-extrabold'>Top Stories</h4>
          <p className='text-sm font-thin text-gray-400'>Lorem ipsum dolor sit amet consectetur</p>

          <ul>
          <li className='text-lg cursor-pointer'><span className='text-gray-400 text-2xl  '>1.</span>  Lorem ilisum dolor sit amet,</li>
            <li className='text-lg cursor-pointer'><span className='text-gray-400 text-2xl'>2.</span>Game of choressit amet,</li>
            <li className='text-lg cursor-pointer'><span className='text-gray-400 text-2xl'>3.</span>Lorem ilisum dolor sit amet,</li>
          </ul>
        </div>
        <div className="Alphabetics mt-20">
          <h4 className='font-extrabold '>Alphabetics</h4>
          <p className='text-sm font-thin text-gray-400'>Lorem ipsum dolor sit amet consectetur</p>
          <div className='grid grid-cols-6 gap-2 '>
            {alphArray.map(letter => (
              <button key={letter} className='border p-2 font-base '>{letter}</button>
            ))}
          </div>

        </div>
      </div>
    </div>


  </div>  )
}
