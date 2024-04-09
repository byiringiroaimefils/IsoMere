import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { UserButton, SignedOut } from "@clerk/clerk-react";
import { LuMoonStar } from "react-icons/lu";



const Header = () => {
  const Links = [
    { name: "Home", link: "/Homepge" },
    { name: "Proverbs", link: "/Proverbs" },
    { name: "Preview", link: "/Preview" },
    { name: "Setting", link: "/Setting" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className='shadow-sm w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>

        <div className='font-bold text-base cursor-pointer flex items-center'>
          
            <img src='BabyStoryLogo.png' alt="" className='h-10 translate-x-[-20px]' />
            <h2 className='mx-[-39px]'><span>Baby</span>Story</h2>
          
          <div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-0  z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[69px]' : 'top-[-490px]'}`}>
              {
                Links.map((link) => (
                  <li className='md:ml-2  font-medium text-sm text-gray-500'>
                    <Link to={link.link} className='mr-2'>{link.name}</Link>
                  </li>))
              }
            </ul>
          </div>
        </div>
        <div className='flex items-center md:mx-3  gap-6'>
          <div className='userprofile absolute right-20 top-4'>
            <UserButton />
            <SignedOut />
          </div>
          <div onClick={() => setOpen(!open)} className='absolute right-5 top-7 cursor-pointer md:hidden w-7 h-7'>
            {
              open ? <FaTimes /> : <FaBars />
            }
          </div>
          <div className='Moon md:flex'>
            <LuMoonStar className='text-base' />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;