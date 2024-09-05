import axios from 'axios'
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import NavBar from "../NavBar";
import { FC } from "react"
import Load from "../Service/Loading";



interface Story {
  _id: string,
  Title: string,
  image: string,
  Decription: string
  createdAt: string
}

const View: FC = () => {
  const [story, setStory] = useState<Story>({} as Story);
  const [Loading, setLoading] = useState(true);

  const { id } = useParams();


  useEffect(() => {
    axios.get(`https://babystory-server.onrender.com/story/${id}`)
      .then((data) => {
        setStory(data.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log('error', error)
        setLoading(false)
      })
  }, [id]);

  return (
    <>
      <NavBar />
      <div className='mt-20'>
        <Link to='/Setting/Story'>
          <button>Back</button>
        </Link>
        <div>
          {
            Loading ? (
              <div className='flex justify-center text-center mt-56'>
                <Load />
              </div>
            ) : (
              <div>
                <div className='Container flex justify-around  w-full  '>
                  <div className=''>
                    <div key={story._id} className='story p-4 w-[650px] md:translate-x-10' >
                      <div className='Header '>
                        <h2 className='font-bold  text-base '>{story.Title}</h2>
                        <p className='text-sm font-thin text-gray-400'>BYIRINGIRO </p> <br />
                        <img src={story.image} alt="" className='' />
                      </div>
                      <div className='Description mt-4 '>
                        <p>{story.Decription}</p>
                        <p className='text-sm font-thin text-gray-400'>{new Date(story.createdAt).toString()}</p> <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}
export default View;
