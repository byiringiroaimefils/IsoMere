import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { UserButton } from "@clerk/clerk-react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { LuMoonStar } from "react-icons/lu";


export default function List() {

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
      <div className='Container  flex justify-between mt-4 p-5 shadow-sm'>
        <div className='flex m translate-y-1 '>
          <div className='Logo font-black flex'>
            
              {/* <img src='BabyStoryLogo.png' alt="" className='sm:h-16 sm:translate-y-[-23px] w-16 translate-y-[-5px] translate-x-3 ' /> */}
              <Link to="/Homepge"><h2>Baby<span className='text-blue-500 font-semibold text-base'>Story</span></h2> </Link>
           
          </div>
          <div className='Nav ml-10'>
            <nav>
              <ul className=' flex ml-2 font-thin  text-gray-400'>
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
        <div className='account mr-8 flex gap-3' >
          <div className='userprofile'>
            <UserButton />
          </div>
          <div className='Bar'>
            <LuMoonStar className=' w-10 translate-y-2' onClick={ThemeSwitch} />
          </div>
          <div className='Bar'>
          <HiOutlineBars3BottomRight className='translate-y-2  sm:flex-none' />
          </div>
        </div>
      </div>
    </header>
  )
}

