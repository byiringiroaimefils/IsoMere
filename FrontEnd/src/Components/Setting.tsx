import React from 'react'
import { Link ,Outlet} from "react-router-dom";
import NavBar from "./NavBar";
import { Button } from "flowbite-react";



export default function Parent() {
  return (
    <>
      <NavBar />
      <div className='flex justify-center items-center  ml-5 gap-5 my-24 '>
        <Link to='Story'>
          <Button color="blue">Story</Button>
        </Link>
        <Link to='Proverb'>
          <Button color="blue">Proverbs</Button>
        </Link>
      </div>
      <div className=' w-screen'>
        <Outlet/>
      </div>
    </>
  )
}
