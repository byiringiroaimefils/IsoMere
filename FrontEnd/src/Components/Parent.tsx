import React from 'react'
import NavBar from "./NavBar";


export default function Parent() {
  return (
    <div>
  <div>
      <NavBar />
      <div className='text-center mt-[20%]'>
        <button className='rounded-sm bg-blue-500  text-white font-semibold py-1 px-4   mr-4'>
          Page Not Found !!!!
        </button>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In blanditiis veniam deleniti natus</p>
      </div>
    </div>
    </div>
  )
}
