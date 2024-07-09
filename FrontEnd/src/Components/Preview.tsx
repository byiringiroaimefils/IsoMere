
import NavBar from "./NavBar";
// import { useUser } from '@clerk/clerk-react';
import { MdThumbUp, MdThumbDown } from "react-icons/md";




export default function Preview() {
  // const { user } = useUser();
  // const isAdmin = user.publicMetadata?.role === 'Admin';
  return (
    // isAdmin ?
      <>
        <NavBar />
        <div className='welcome words'>

        </div>
        <div className='m-28'>
          <h2 className='font-bold'>The Story of the World’s Creation</h2>
          <p className=''>
            <span className='font-semibold'>Day 1 </span><br />
            Light was the first thing that God created because before day 1, the earth was completely dark.
            All throughout the creation saga, God employed this same method.He didn't achieve this by stirring a liquid,
            making a fancy gesture, or using his hands in any way.  Instead, according to the Bible, light was created when God simply spoke.
            God creates light and darkness. He separates them, putting the light in the sky and the darkness on the earth. He names the light "day" and the darkness
            "night." He also establishes the cycle of day and night.
          </p> <br />
          <div className="icons flex gap-2">   
            <MdThumbUp /><span className='translate-y-[-6px]'>0</span><MdThumbDown /><span className='translate-y-[-6px]'>0</span>
          </div>
        </div>
      </>
      // : <>
      //   <NavBar />
      //   <div className='flex justify-center  flex-col items-center my-52'>
      //     <h1 className='text-6xl font-extrabold'>404</h1>
      //     <h2>Oops !!, You are not Authorized For This Page.</h2>
      //     <button className='bg-blue-700 p-2 my-3 text-white font-semibold'> <Link to='/Homepge'> Go to Homepage</Link></button>
      //   </div>
      // </>
  )
}
