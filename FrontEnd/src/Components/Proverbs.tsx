import React, { FC } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from "./NavBar";

interface Story {
  id: string,
  TitleofProverb: string,
  Proverb: string


}


const Story: FC = () => {
  const [Story, setStory] = useState<Story[]>([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8080/proverbs")
      .then((data) => {
        setStory(data.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log('error', error)
        setLoading(false)
      })
  }, [])
  return (

    <div>
      <NavBar />
      <div className='w-Full mt-5 ' >
        <div>
          {
            Loading ? (
              <div>
                <p>Loading.....</p>
              </div>
            ) : (
              <div>
                {
                  Story.map(({ id, TitleofProverb, Proverb }) => (
                    <div key={id} className='ml-20 mr-20'>
                      <div className='Header '>
                        <h2 className='font-bold  text-base '>{TitleofProverb}</h2>
                      </div>
                      <div className='Description mt-2 '>
                        <p>{Proverb}</p>
                        <p className='text-sm font-thin text-gray-400'>20th, March 2024</p> <br />
                      </div>
                    </div>
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
export default Story