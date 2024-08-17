
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoIosArrowDropdown } from "react-icons/io";


export default function Footer() {
    return (
        <div>
            <div className='w-full  bg-black text-white flex justify-center'>
                <Link to={'/Idea'}>
                <p className='text-center p-2 text-xs'>Do you have an idea for The New Times to cover? Submit it here!</p>
                </Link>
                <span><IoIosArrowDropdown className="text-white text-xl translate-x-72 translate-y-1.5"/></span>
            </div>
            <div className='w-full h-[35vh] bg-gray-100/25 p-7'>

                <div className='md:flex  flex justify-center'>
                    <div className='flex gap-3  translate-y-2 '>
                        {/* <h2 className='text-gray-600 cursor-pointer hover:underline'>Home</h2> */}
                        <Link to={'/About '}>
                            <h2 className='text-gray-600 cursor-pointer hover:underline'>About us</h2>
                        </Link>
                        <Link to={'/Terms'}>
                            <h2 className='text-gray-600 cursor-pointer hover:underline'>Terms of Service.</h2>
                        </Link>
                        <Link to={'/Service'}>
                            <h2 className='text-gray-600 cursor-pointer hover:underline'>Privacy Policy.</h2>
                        </Link>
                    </div>
                    {/* <div className='flex mr-16 text-xl hidden md:flex'>
                        <img src='BabyStoryLogo.png' alt="" className='h-12 translate-x-[-20px]' />
                        <h2 className='mx-[-39px] my-2 font-bold'><span>Baby</span>Story</h2>
                    </div> */}

                </div> <br /><br /><br /><br />
                <div className='flex gap-2 justify-center text-2xl '>
                    <IoLogoInstagram className='text-3xl' />
                    <FaXTwitter className='text-3xl' />
                    <FaFacebook className='text-3xl' />

                </div><br />
                <div className='flex justify-center '>
                    <p className='text-gray-600'>Copyright &copy; 2024 Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
