import React from 'react'
import { Link } from 'react-router-dom';
import { SignInButton, UserButton } from "@clerk/clerk-react";
// import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { LuMoonStar } from "react-icons/lu";

export default function Homepge() {
    return (

        <div>

            <header>
                <div className='Contaoiner  flex justify-between mt-4 p-5 shadow-sm'>
                    <div className='flex ml-14 translate-y-1'>
                        <div className='Logo font-black '>
                            <Link to="#"> <h2>Baby<span className='text-blue-500 font-semibold text-base'>Story</span></h2></Link>
                        </div>
                    </div>
                    <div className='account mr-8 flex gap-3' >
                        <button className='Login bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded-full'>
                            <SignInButton mode='modal' redirectUrl='/Homepge' />
                        </button>
                        <button className='started font-semibold py-1 px-4 rounded-full border'>
                            Get started
                        </button>
                        <div className='Bar'>
                            <LuMoonStar className=' w-10 translate-y-2 ' />
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className='Container'>
                    <div className='mt-40'>
                        <h2 className=' font-bold  text-center text-5xl' >Social entrepreneurship a sustainable approach <br /> to poverty than Traditional Charity</h2> <br />
                        <p className='font-light text-gray-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis alias tempore  consectetur<br /> accusantium ut  reiciendis deserunt saepe reprehenderit tempore  consectetur<br /> quas laboriosam obcaecati! reprehenderit</p>
                        <div className='buttton text-center mt-10'>
                            <button className=' bg-blue-500  text-white font-semibold py-1 px-4 rounded-full  mr-4'>
                                Get started
                            </button>
                            <button className=' font-semibold py-1 px-4 rounded-full border'>
                                My Favorites
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}
