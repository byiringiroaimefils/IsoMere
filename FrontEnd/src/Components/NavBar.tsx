import  { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { UserButton } from "@clerk/clerk-react";
import { LuMoonStar } from "react-icons/lu";
import {  FaBars } from "react-icons/fa";
// import { ImCross } from "react-icons/im";



export default function List() {
  const [openLink, SetopenLink] = useState(false);

  // Background theme changing
  const [bgcolor, Setbgcolor] = useState("Light");
  useEffect(() => {
    if (bgcolor === "Dark") {
      document.body.classList.add("Dark")
    }
    else {
      document.body.classList.remove("Dark")
    }
  }, [bgcolor]);

  const ThemeSwitch = () => {
    Setbgcolor(bgcolor === "Dark" ? "Light" : "Dark")
  }
  return (
    <header className='mx-auto'>
      <div className='Container  flex justify-between mt-4 p-5 shadow-sm w-full'>
        <div className='flex m translate-y-1 '>
          <div className='Logo font-black flex'>

            <img src='BabyStoryLogo.png' alt="" className='sm:h-16 sm:translate-y-[-23px] w-16 translate-y-[-5px] translate-x-3 ' />
            <Link to="/Homepge"><h2>Baby<span className='text-blue-500 font-semibold text-base'>Story</span></h2> </Link>

          </div>
          <div className='Nav ml-10'>
            <nav className=''>
            <ul className= {`flex ml-2 font-thin text-gray-400 ${openLink ? 'open' : ''}`} >
                <li>
                  <Link to="/Homepge" className='mr-2'>Home</Link>

                </li>
                <li>
                  <Link to="/Story" className='mr-2'>
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
        <div className='account flex gap-3' >
          <div className='userprofile'>
            <UserButton />
          </div>
          <div className='Moon md:flex'>
            <LuMoonStar className=' w-10 translate-y-2' onClick={ThemeSwitch} />
          </div>
          <div className='md:hidden'>
            <i><FaBars className=' cursor-pointer w-12 translate-y-2 flex-n' onClick={()=>{SetopenLink(!openLink)}} /></i>
          </div>
        </div>
      </div>
    </header>
  )
}

