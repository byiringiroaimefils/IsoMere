import React, { FC } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from "./NavBar";
import Load from "./Loading";

interface Proverb {
  id: string,
  TitleofProverb: string,
  Proverb: string


}


const Proverb: FC = () => {
  const [Proverb, setProverb] = useState<Proverb[]>([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://babyProverb-server.onrender.com/proverbs")
      .then((data) => {
        setProverb(data.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log('error', error)
        setLoading(false)
      })
  }, [])
  return (
    <>
      <NavBar />
      <div className='w-Full mt-5 ' >
        <div className='my-20'>
          {
            Loading ? (
              <div className='flex justify-center text-center mt-56'>
                <Load />
              </div>
            ) : (
              <div>
                {
                  Proverb.map(({ id, TitleofProverb, Proverb }) => (
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
    </>
  )
}
export default Proverb