
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
  const [Limit ,setLimit] = useState(4)
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

  const add = ()=>{
  setLimit((Limit) => Limit + 4)
  }

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
              <div className='md:flex justify-center mt-28 '>
                <div>
                  {
                    Proverb.slice(0,Limit).map(({ id, TitleofProverb, Proverb, createdAt }) => (
                      <div key={id} className='ml-10 mr-10 ' >
                        <div className='Header '>
                          <h2 className='font-bold  text-3xl '>{TitleofProverb}</h2>
                          <p className='mt-2 text-sky-500'>by BYIRINGIRO</p>
                        </div>
                        <div className='Description mt-2 w-[90%] '>
                          <p dangerouslySetInnerHTML={{ __html: Proverb }} />
                          <p className='text-sm font-thin text-gray-400'>{new Date(createdAt).toString().replace(/\sGMT.*$/, '')}</p> <br />
                        </div>
                      </div>
                    ))
                  }
                  <div className='flex  mb-10 justify-center items-center  md:translate-x-64 md:translate-y-20 '>
                    <button className=' w-32 text-white p-1.5  rounded-full font-bold  bg-blue-500 hover:bg-blue-700 ' onClick={add} >Read More</button>
                  </div>
                </div>
                <div className=' w-full md:translate-x-[-15%] translate-x-10'>
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