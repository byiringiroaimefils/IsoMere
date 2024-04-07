import React from 'react'
import Table from "../Flowbit/TableProverb";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";





export default function Parent() {
  return (
    <div>

      <div>
        <div className='ml-6 mt-4'>
          <h2 className='text-xl font-bold'>Upload Proverbs</h2>
          <p className='text-sm font-thin text-gray-400'>Lorem ipsum dolor sit amet consectetur.</p>

        </div>
        <div className='flex justify-end  mb-3 md:gap-56 sm:gap-20 mt-10 mr-20'>
          <input type="text" className='border outline-none h-7 w-60 rounded-md md:h20 translate-y-1 pl-2 ' placeholder='Search' />
          <Link to="/FormProverb">
            <Button color="blue">Upload</Button>
          </Link>
        </div>
        <hr />
        <div>
          <div className=''>
            <Table />
          </div>
        </div>
      </div>
    </div>
  )
}
