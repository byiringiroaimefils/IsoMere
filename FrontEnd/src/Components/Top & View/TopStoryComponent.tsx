import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios'
import David from "./David and Goliath.webp"



interface Story {
  _id: string,
  Title: string,
  image: string,
  Decription: string
}

export default function TopProverbComponent() {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    axios.get(`https://babystory-server.onrender.com/stories`)
      .then((response) => {
        setStories(response.data);
      })
      .catch((error) => {
        console.log('error', error)
      })
  }, []);

  return (
    <>
      <div className="TopStory mt-20 font-serif">
        {/* <h4 className='font-extrabold'>MOST POPULAR STORIES</h4> */}
        <h3 className="text-xl font-semibold mb-4">Most Popular Stories</h3>
        {/* <p className='text-sm font-thin bg-black/50 rounded-sm h-0.5 w-32 mb-2 '></p><br /> */}
        <div> <br />
          {stories.slice(0, 2).map((story) => (
            <Link to={`/TopStory/${story._id}`}>
              <div key={story._id} className='grid grid-cols-2 gap-5 mb-5'>
                <div className="img text-lg">
                  <h2 className='font-extrabold text-xl uppercase'>{story.Title}</h2>
                  <p className="text-base text-gray-400 line-clamp-2" dangerouslySetInnerHTML={{ __html: story.Decription }} />
                </div>
                <div className="text">
                  <img src={story.image} alt="" className='w-[75%] object-cover' />
                </div>
                <div className="img text-lg">
                  <h2 className='font-extrabold text-xl uppercase'>David Killed Goriath</h2>
                  <p className="text-base text-gray-400 line-clamp-2">Lorem ipsu dolor  amet consectetur adipisicing </ p>
                </div>
                <div className="text">
                  <img src={David} alt="" className='w-[75%] object-cover' />
                </div>
              </div>

              <div className='grid grid-cols-2 gap-5 mb-5'>
              </div>
            </Link>
          ))}
          <br />
        </div>
      </div>
    </>
  )
}
