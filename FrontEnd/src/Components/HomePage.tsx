import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { SignInButton } from "@clerk/clerk-react";
// import { SignIn } from "@clerk/clerk-react";
import { LuMoonStar } from "react-icons/lu";
import { FaSun } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6"




export default function Homepge() {
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

    <>

      <header>
        <div className='Contaoiner shadow-sm flex justify-between mt-4 p-5 overflow-hidden '>
          <div className='flex translate-y-1'>
            <div className='Logo font-black flex '>
              <img src='BabyStoryLogo.png' alt="" className='w-16 translate-y-[-5px] translate-x-3' />
              <Link to="#"> <h2>Baby<span className='text-blue-500 font-semibold text-base '>Story</span></h2></Link>
            </div>
          </div>
          <div className='account w-fit flex gap-3' >
            <button className='Login bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded-full'>
              <SignInButton mode='modal' redirectUrl='/Homepge' />
            </button>
            <button className=' started  sm:flex-none md:flex-none font-bold py-1 px-5 rounded-full border'>
              Join us
            </button>
            <div className='Moon my-2 px-5' onClick={ThemeSwitch}>
              {
                bgcolor === "Dark" ? <FaSun /> : <LuMoonStar />
              }
            </div>
            <div className='md:hidden'>
              <FaBarsStaggered className=' w-12 translate-y-2 flex-n' />
            </div>
          </div>
        </div>
      </header>
      <main className='overflow-hidden'>
        <div className=" h-[40rem] w-full Dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[.05] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className='ContainerHome translate-y-[-9%]  bg-white/5 backdrop-filter '>
            <div className='mt-40 w-full pb-10'>
              <h2 className=' font-bold  text-center text-5xl ' >Train your children with  <span className='text-blue-600 '>BabyStory </span> <br />by Enhance reading through Stories and Proverbs</h2> <br />
              <p className='font-light text-gray-600 text-center  w-full'>Our children must be good in reading short stories ,Proverbs and growing in holy spirit through story<br /> and also calling them to be desciple of jesus   child has to read and know Special <br />event happened in long time ago.</p>
              <div className='buttton text-center mt-10'>
                <SignInButton mode='modal' redirectUrl='/Homepge' >
                  <span className=' cursor-pointer bg-blue-500  text-white font-semibold py-1.5 px-4 rounded-full  mr-4'>
                    Get started
                  </span>
                </SignInButton>
                <button className=' font-semibold py-1 px-4 rounded-full border'>
                  Subscription
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}
