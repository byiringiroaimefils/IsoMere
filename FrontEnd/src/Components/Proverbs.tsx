
import { FC } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from "./NavBar";
import Load from "./Pages/Loading";
import TopProverb from "./Top/TopProverbComponent"
import Footer from './Footer'

interface Proverb {
  id: string,
  TitleofProverb: string,
  Proverb: string,
  createdAt: string,
}

const Proverb: FC = () => {
  const [Proverb, setProverb] = useState<Proverb[]>([]);
  const [Loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    axios.get("https://babystory-server.onrender.com/proverbs")
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
      <div className='w-Full' >
        <div className='my-20'>
          {
            Loading ? (
              <div className='flex justify-center text-center mt-56'>
                <Load />
              </div>
            ) : (
              <div className='md:flex justify-center translate-y-[-4%] mt-36 ml-14'>
                <div>
                  {
                    Proverb.map(({ id, TitleofProverb, Proverb, createdAt }) => (
                      <div key={id} className='ml-10 mr-10 ' >
                        <div className='Header '>
                          <h2 className='font-bold  text-4xl '>{TitleofProverb}</h2>
                          <p className='mt-2 text-sky-500'>by BYIRINGIRO</p>
                        </div>
                        <div className='Description mt-2 '>
                          <p dangerouslySetInnerHTML={{ __html: Proverb }} />
                          <p className='text-sm font-thin text-gray-400'>{new Date(createdAt).toString().replace(/\sGMT.*$/, '')}</p> <br />
                        </div>
                      </div>
                    ))
                  }
                  <div className='flex justify-between ml-5'>
                    <button className='text-white bg-sky-600 rounded-xl w-20 p-1'>Prev</button>
                    <button className='text-white bg-sky-600 rounded-xl w-20 p-1'>Next</button>
                  </div>
                </div>
                <div className=' w-full'>
                  <TopProverb />
                </div>
              </div>


            )
          }
        </div>
        <div>
          <Footer />
        </div>
      </div >
    </>
  )
}
export default Proverb;