import { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6"
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { SignInButton } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
// import {Link} from "react-router-dom";




const Header = () => {

  const Links = [
    { name: "Home", link: "/" },
    { name: "Proverbs", link: "/Proverbs" },
    { name: "Bible's Story", link: "/Preview" },
    { name: "Setting", link: "/Setting" },
  ];
  const [open, setOpen] = useState(false);

  const { user } = useUser();
  const isAdim = user?.publicMetadata.User === "Admin";

  return (
    isAdim ?
      <>

        <div className='Header bg-white shadow-sm w-full '>

          <div className='md:flex items-center justify-between  py-4 md:px-10 px-7'>

            <div className='font-bold text-base cursor-pointer flex items-center '>
              <Link to="/Homepge" >
                <img src='BabyStoryLogo.png' alt="" className='h-10 translate-x-[-20px]' />
              </Link>
              <h2 className='mx-[-39px]'><span>Baby</span>Read</h2>
              <div className='mx-12 '>
                <ul className={` Nav  md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-0  -z-50  left-0 w-full md:w-auto  md:pl-0 pl-9 bg-white  transition-all duration-500 ease-in ${open ? 'top-[69px]' : 'top-[-490px]'}`}>
                  {
                    Links.map((link) => (
                      <li key={link.name} className='md:ml-2 md:hover:text-sky-600 font-medium md:text-sm text-gray-500 pt-5 md:translate-y-[-10px]' >
                        <Link to={link.link} className='mr-2 '>{link.name}</Link>
                      </li>))
                  }
                </ul>
              </div>
            </div>
            <div className='flex items-center md:mx-3  gap-6'>
              <div className='flex'>
                <div className='userprofile absolute right-20 top-5 flex justify-between gap-2'>
                  <Link to="/subscribe">
                    <button className='border p-1.5 font-bold rounded-full w-24 ml-4'>Subscribe</button>
                  </Link>
                  <UserButton afterSignOutUrl='/' />
                </div>
              </div>
              <div onClick={() => setOpen(!open)} className='absolute right-5 top-7 cursor-pointer md:hidden w-7 h-7'>
                {
                  open ? <FaTimes /> : <FaBarsStaggered />
                }
              </div>
            </div>

          </div>
        </div>
      </> :
      <>
        <div className='Header bg-white shadow-sm w-full fixed top-0 right-0  z-50'>
          <div className='md:flex items-center justify-between  py-4 md:px-10 px-7'>

            <div className='font-bold text-base cursor-pointer flex items-center '>
              <Link to="/Homepge" >
                <img src='BabyStoryLogo.png' alt="" className='h-10 translate-x-[-20px]' />
              </Link>
              <h2 className='mx-[-39px]'><span>Baby</span>Read</h2>
              <div className='mx-12 '>
                <ul className={` Nav  md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-0  -z-50  left-0 w-full md:w-auto  md:pl-0 pl-9 bg-white  transition-all duration-500 ease-in ${open ? 'top-[69px]' : 'top-[-490px]'}`}>
                  <li className='md:ml-2 md:hover:text-sky-600 font-medium md:text-sm text-gray-500 pt-5 md:translate-y-[-10px]' >
                    <Link to='/Homepge' className='mr-2 '>Home</Link>
                  </li>
                  <li className='md:ml-2 md:hover:text-sky-600 font-medium md:text-sm text-gray-500 pt-5 md:translate-y-[-10px]' >
                    <Link to='/Proverbs' className='mr-2 '>Proverbs</Link>
                  </li>
                  <li className='md:ml-2 md:hover:text-sky-600 font-medium md:text-sm text-gray-500 pt-5 md:translate-y-[-10px]' >
                    <Link to='/Preview' className='mr-2 '>Bible's Story </Link>
                  </li>

                </ul>
              </div>
            </div>
            <div className='flex items-center md:mx-3  gap-6'>
              <div className='userprofile absolute right-20 top-4'>
                <Link to="/subscribe">
                  <button className='border p-1.5 font-bold rounded-full w-24 mr-4'>Subscribe</button>
                </Link>
                <SignInButton mode='modal' redirectUrl='/' >
                  <button className='border p-1.5 font-bold rounded-full w-24 bg-sky-600 text-white'>Log in</button>
                </SignInButton>
              </div>
              <div onClick={() => setOpen(!open)} className='absolute right-5 top-7 cursor-pointer md:hidden w-7 h-7'>
                {
                  open ? <FaTimes /> : <FaBarsStaggered />
                }
              </div>
            </div>

          </div>
        </div>
      </>
  );
};

export default Header;