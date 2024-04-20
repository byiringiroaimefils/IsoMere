import React, { useState, useEffect } from 'react';
import { FaTimes, FaSun } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6"
import { Link } from 'react-router-dom';

import { UserButton} from "@clerk/clerk-react";
import { LuMoonStar } from "react-icons/lu";



const Header = () => {

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


  const Links = [
    { name: "Home", link: "/Homepge" },
    { name: "Proverbs", link: "/Proverbs" },
    { name: "Preview", link: "/Preview" },
    { name: "Setting", link: "/Setting" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className='Header bg-white shadow-sm w-full fixed top-0 right-0  z-50'>
      <div className='md:flex items-center justify-between  py-4 md:px-10 px-7'>

        <div className='font-bold text-base cursor-pointer flex items-center '>
          <Link to="/Homepge" >
            <img src='BabyStoryLogo.png' alt="" className='h-10 translate-x-[-20px]' />
          </Link>
            <h2 className='mx-[-39px]'><span>Baby</span>Story</h2>
          <div className='mx-12 '>
            <ul className={` Nav  md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-0  -z-50  left-0 w-full md:w-auto  md:pl-0 pl-9 bg-white  transition-all duration-500 ease-in ${open ? 'top-[69px]' : 'top-[-490px]'}`}>
              {
                Links.map((link) => (
                  <li className='md:ml-2 md:hover:text-sky-600 font-medium md:text-sm text-gray-500 pt-5 md:translate-y-[-10px]' >
                    <Link to={link.link} className='mr-2 '>{link.name}</Link>
                  </li>))
              }
            </ul>
          </div>
        </div>
        <div className='flex items-center md:mx-3  gap-6'>
          <div className='userprofile absolute right-20 top-5'>
            <UserButton />
          </div>
          <div onClick={() => setOpen(!open)} className='absolute right-5 top-7 cursor-pointer md:hidden w-7 h-7'>
            {
              open ? <FaTimes /> : <FaBarsStaggered />
            }
          </div>
          <div className='Moon md:flex' onClick={ThemeSwitch}>
            {
              bgcolor === "Dark" ? <FaSun /> : <LuMoonStar />
            }
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;