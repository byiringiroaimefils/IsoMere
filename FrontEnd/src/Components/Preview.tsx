import React from 'react'
import NavBar from "./NavBar";
import { useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';



export default function Preview() {
  const { user } = useUser();
  const isAdmin = user.publicMetadata?.role === 'Admin';
  return (
    isAdmin ?
      <>
        <NavBar />
        <div className='text-center mt-28 w-full'>
          <button className=' rounded-sm bg-blue-500  text-white font-semibold py-1 px-4   mr-4'>
            Page Not Found !!!!
          </button>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In blanditiis veniam deleniti natus</p>
        </div>
      </>
      : <>
        <NavBar />
        <div className='flex justify-center  flex-col items-center my-52'>
          <h1 className='text-6xl font-extrabold'>404</h1>
          <h2>Oops !!, you are not authorized for this Page.</h2> 
          <button className='bg-blue-700 p-2 my-3 text-white font-semibold'> <Link to='/Homepge'> Go to Homepage</Link></button>
        </div>
      </>
  )
}
