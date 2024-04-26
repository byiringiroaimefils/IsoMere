import React from 'react'
import { Link, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Button } from "flowbite-react";
import { Toaster } from "react-hot-toast";
import { useUser } from '@clerk/clerk-react';




export default function Parent() {
  const { user } = useUser();
  const isAdim = user?.publicMetadata.role === "Admin";
  return (
    isAdim ?
      <>
        <NavBar />
        <div className='flex justify-center items-center  ml-5 gap-5 my-28 '>
          <Link to='Story'>
            <Button color="blue" className='border-none'>Upload Your Story</Button>
          </Link>
          <Link to='Proverb'>
            <Button color="blue" className='border-none'>Upload Your Proverbs</Button>
          </Link>
        </div>
        <div className='w-screen'>
          <Outlet />
        </div>
        <Toaster
          position="bottom-right"
          reverseOrder={true}
        />
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
