import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { UserButton, SignedOut } from "@clerk/clerk-react";
import { LuMoonStar } from "react-icons/lu";
import { FaBars } from "react-icons/fa";




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
    <header className='mx-auto  w-full'>
      <div className='Container  flex justify-between mt-6 pt-4 shadow-sm'>
        <div className='flex m translate-y-1 '>
          <div className='Logo font-black flex'>

            <img src='BabyStoryLogo.png' alt="" className='sm:h-16 sm:translate-y-[-23px] h-5  translate-y-[-5px] translate-x-6 ' />
            <Link to="/Homepge"><h2>Baby<span className='text-blue-600 font-semibold text-base'>Story</span></h2> </Link>

          </div>
          <div className='Nav ml-10 '>
            <nav className=' '>
              <ul className={`text-gray-500  md:flex pb-9 ${openLink ? 'open' : ''} `}  >
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
          <div className='userprofile'>
            <UserButton />
            <SignedOut />
          </div>
          <div className='Moon md:flex md:mr-10'>
            <LuMoonStar className=' w-10 translate-y-2' onClick={ThemeSwitch} />
          </div>
        <div className={`None md:hidden sm:hidden fixed h-full w-screen  bg-black/50 top-[232px] right-0 ${openLink ? 'open' : ''}`}>
        </div>


          <div className='md:hidden'>
            <i><FaBars className=' cursor-pointer w-12 translate-y-2 translate-x-[-12px] flex-n' onClick={() => { SetopenLink(!openLink) }} /></i>
          </div>
        </div>
      </div>
    </header>
  )
}

