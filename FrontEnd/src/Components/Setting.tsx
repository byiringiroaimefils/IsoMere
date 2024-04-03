import React from 'react'
import { Link} from "react-router-dom";
import NavBar from "./NavBar";
import { Button } from "flowbite-react";




export default function Parent() {
  return (
    <div>
      <NavBar />
      <div className='flex justify-center text-center mt-40 flex-col'>
        <div>
          <p>Do you want to upload  what? </p> <br />
        </div>
        <div className='flex justify-center text-center  gap-5'>
          <Link to='Proverb'>
            <Button color="blue">Story</Button>
          </Link>
          <Link to='Proverb'>
            <Button color="blue">Proverbs</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
