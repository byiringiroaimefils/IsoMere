import IG from "../Top/Bh.jpeg"
import { Link } from 'react-router-dom';

export default function TopProverbComponent() {
  return (
    <>
      <div className="TopStory mt-20 ">
        <h4 className='font-extrabold'>MOST POPULAR STORIES</h4>
        <p className='text-sm font-thin bg-black/50 rounded-sm h-0.5 w-32 mb-2 '></p><br /> 

        <Link to={'/TopStory'}>
          <div>
            <div className='grid grid-cols-2 '>
              <div className="img text-lg">
                <h2 className='font-extrabold text-xl'>Lorem ipsum dolor sitame </h2>
                <p className='text-base text-gray-400'>Lorem ipsum dolor sit, amet consectetur ...</p>
              </div> 
              <div className="text">
                <img src={IG} alt="" className='w-[75%]  object-cover' />
              </div>
            </div> <br />
            <div className='grid grid-cols-2'>
              <div className="img text-lg">
                <h2 className='font-extrabold text-xl'>Lorem ipsum dolor sitame </h2>
                <p className='text-base text-gray-400'>Lorem ipsum dolor sit, amet consectetur ...</p>
              </div>
              <div className="text">
                <img src={IG} alt="" className='w-[75%]  object-cover' />
              </div>
            </div>
            <br />
            <div className='grid grid-cols-2'>
              <div className="img text-lg">
                <h2 className='font-extrabold text-xl'>Lorem ipsum dolor sitame </h2>
                <p className='text-base text-gray-400'>Lorem ipsum dolor sit, amet consectetur ...</p>
              </div>
              <div className="text">
                <img src={IG} alt="" className='w-[75%]  object-cover' />
              </div>
            </div>
            <br />
            <div className='grid grid-cols-2'>
              <div className="img text-lg">
                <h2 className='font-extrabold text-xl'>Lorem ipsum dolor sitame </h2>
                <p className='text-base text-gray-400'>Lorem ipsum dolor sit, amet consectetur ...</p>
              </div>
              <div className="text">
                <img src={IG} alt="" className='w-[75%]  object-cover' />
              </div>
            </div>
          </div>
        </Link>
      </div>

    </>
  )
}
