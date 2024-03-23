// import React from 'react'
import { Link } from 'react-router-dom';
import { UserButton } from "@clerk/clerk-react";
// import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaMoon } from "react-icons/fa6";


export default function List() {
  return (
    <header>
      <div className='Contaoiner  flex justify-between mt-4 p-5 shadow-sm'>
        <div className='flex ml-14 translate-y-1'>
          <div className='Logo font-black '>
            <Link to="/"> <h2>Baby<span className='text-blue-500 font-semibold text-base'>Story</span></h2></Link>

          </div>
          <div className='Nav ml-10 '>
            <nav className=' backdrop-blur'>
              <ul className='flex ml-2 font-thin  text-gray-400'>
                <li>
                  <Link to="Homepge" className='mr-2'>Home</Link>

                </li>
                <li>
                  <Link to="Story" className='mr-2'>
                    Story
                  </Link>

                </li>
                <li>
                  <Link to="/Parent" className='mr-2'>
                    Parent
                  </Link>

                </li>
                <li>

                  <Link to="/Preview" className='mr-2'>
                    Preview
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='account mr-8 flex gap-3' >
          <div className='userprofile'>
            <UserButton />
          </div>
          <div className='Bar'>
            <FaMoon className=' w-10 translate-y-2' />
          </div>
        </div>
      </div>
    </header>
  )
}

