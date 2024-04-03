import React from 'react'
import NavBar from "./NavBar";
import Table from "./Flowbit/Table";
import { Button } from "flowbite-react";



export default function Parent() {
  return (
    <div>
      <NavBar />
      <div>
        <div className='ml-6 mt-4'>
          <h2 className='text-xl font-bold'>Upload Story</h2>
          <p className='text-sm font-thin text-gray-400'>Lorem ipsum dolor sit amet consectetur</p>

        </div>
        <div className='flex justify-end md:gap-56 sm:gap-20 mt-10 mr-20'>
          <input type="text" className='border outline-none h-7 w-60 rounded-md md:h20 translate-y-1' />
          <Button color="blue">Upload</Button>
        </div>
        <div>
          <div className=''>
            <Table />
          </div>
        </div>
      </div>
    </div>
  )
}
