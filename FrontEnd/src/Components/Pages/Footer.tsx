import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoIosArrowDropdown } from "react-icons/io";

export default function Footer() {
    const topButton = () => {
        window.scrollTo(0, 0);
        console.log("clicked");
    }

    return (
        <footer className="w-full bg-black text-white font-serif">
            <div className='w-full flex justify-between items-center px-4 py-2'>
                <Link to={'/Idea'} className="flex-grow text-center">
                    <p className='text-xs sm:text-sm'>Do you have an idea for IsoMere to cover? Submit it here!</p>
                </Link>
                <button onClick={topButton} className="cursor-pointer p-2" aria-label="Scroll to top">
                    <IoIosArrowDropdown className="text-white text-xl" />
                </button>
            </div>
            <div className='w-full bg-gray-100 p-4 sm:p-7'>
                <nav className='flex flex-wrap justify-center translate-x-10 gap-4 mb-6'>
                    <Link to={'/About'} className='text-gray-600 hover:underline text-sm sm:text-base'>
                        About us
                    </Link>
                    <Link to={'/Terms'} className='text-gray-600 hover:underline text-sm sm:text-base'>
                        Terms of Service
                    </Link>
                    <Link to={'/Service'} className='text-gray-600 hover:underline text-sm sm:text-base'>
                        Privacy Policy
                    </Link>
                </nav>
                <div className='flex gap-4 justify-center text-2xl sm:text-3xl mb-6'>
                    <a href="#" aria-label="Instagram" className="text-black" ><IoLogoInstagram /></a>
                    <a href="#" aria-label="Twitter" className="text-black" ><FaXTwitter /></a>
                    <a href="#" aria-label="Facebook" className="text-black" ><FaFacebook /></a>
                </div>
                <div className='text-center'>
                    <p className='text-gray-600 text-xs sm:text-sm'>Copyright &copy; 2024 IsoMere. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
