import { Link, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
export default function Parent() {
  return (
    <>
      <NavBar />
      <div className='md:flex justify-center items-center   ml-5 gap-5 my-28 font-serif'>
        <Link to='Story'>
          <button className=' p-2 font-bold rounded-md mb-5 w-[90%] mx-2 bg-blue-500 hover:bg-blue-700 text-white'>Story</button>
        </Link>
        <Link to='Bibilical'>
          <button className='border-none border p-2 font-bold rounded-md mb-5 w-[90%] mx-2 bg-blue-500 hover:bg-blue-700 text-white'>Biblical Story</button>
        </Link>
        <Link to='Proverb'>
          <button className='border-none border p-2 font-bold rounded-md w-[90%] mx-2 mb-5 bg-blue-500 hover:bg-blue-700 text-white'>Proverb</button>
        </Link>
      </div>
      <div className='w-screen'>
        <Outlet />
      </div>
    </>

  )
}



