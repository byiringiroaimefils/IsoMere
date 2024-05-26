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
        <div className='Contaoiner shadow-sm flex justify-between mt-4 p-5'>
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
            <button className='started  sm:flex-none md:flex-none font-semibold py-1 px-5 rounded-full border'>
              Get started
              {/* <SignInButton mode='modal' redirectUrl='/Homepge' /> */}
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
      <main>
        <div className='ContainerHome'>
          <div className='mt-40 w-full pb-10'>
            <h2 className=' font-bold  text-center text-5xl ' >Train your children with  <span className='text-blue-600 '>BabyStory </span> <br />by Enhance reading through Stories and Proverbs</h2> <br />
            <p className='font-light text-gray-600 text-center  w-full'>Our children must be good in reading short stories and Proverbs with their meaning prepaired with Parent <br />by managing what must your child has to read and tell them Special <br />event happened in past.</p>
            <div className='buttton text-center mt-10'>
              <button className=' bg-blue-500  text-white font-semibold py-1 px-4 rounded-full  mr-4'>
                Get started
              </button>
              <button className=' font-semibold py-1 px-4 rounded-full border'>
                Subscription
              </button>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
