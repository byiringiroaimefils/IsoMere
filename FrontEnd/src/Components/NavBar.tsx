import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { UserButton, SignedOut } from "@clerk/clerk-react";
import { LuMoonStar } from "react-icons/lu";
import { FaBars } from "react-icons/fa";




export default function List() {
  const [openLink, SetopenLink] = useState(false);
  const [bgcolor, Setbgcolor] = useState("Light");
  const ThemeSwitch = () => {
    Setbgcolor(bgcolor === "Dark" ? "Light" : "Dark")
  }


  useEffect(() => {
    if (bgcolor === "Dark") {
      document.body.classList.add("Dark")
    }
    else {
      document.body.classList.remove("Dark")
    }
  }, [bgcolor]);



  return (
    <header className='shadow-sm w-screen translate-y-5'>
      <div className='Container w-screen flex justify-between  pt-4 '>
        <div className='flex translate-y-1 '>

          <div className='Logo font-black flex'>
            <img src='BabyStoryLogo.png' alt="" className='h-16 translate-y-[-23px]  translate-x-6 ' />
            <Link to="/Homepge"><h2>Baby<span className='text-blue-600 font-semibold text-base'>Story</span></h2> </Link>
          </div>

          <div className='Nav ml-10 '>
            <nav>
              <ul className={`text-gray-500  md:flex pb-6 ${openLink ? 'open' : ''} `}  >
                <li>
                  <Link to="/Homepge" className='mr-2'>Home</Link>
                </li>
                <li>
                  <Link to="/Proverbs" className='mr-2'>
                    Proverbs
                  </Link>
                </li>
                <li>
                  <Link to="/Preview" className='mr-2'>
                    Preview
                  </Link>
                </li>
                <li>
                  <Link to="/Setting" className='mr-2'>
                    Setting
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>



        <div className='account flex gap-3' >
          <div className='userprofile mr-3 '>
            <UserButton />
            <SignedOut />
          </div>
          <div className='Moon md:flex mr-20'>
            <LuMoonStar className=' w-10 translate-y-2' onClick={ThemeSwitch} />
          </div>
          <div className='md:hidden translate-x-[-20px]'>
            <i><FaBars className=' cursor-pointer w-12 translate-y-2 translate-x-[-12px] flex-n' onClick={() => { SetopenLink(!openLink) }} /></i>
          </div>
        </div>

      </div>
    </header>
  )
}

