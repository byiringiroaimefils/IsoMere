import { FC } from 'react'
import { useParams,Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from "../NavBar";
import Load from "./Loading";

interface Proverb {
  id: string,
  TitleofProverb: string,
  Proverb: string
}


const Proverb: FC = () => {
  const [Proverb, setProverb] = useState({} as Proverb);
  const [Loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://babystory-server.onrender.com/proverb/${id}`)
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
      <div className='w-Full mt-20 ' >
        <Link to='/Setting/Proverb'>
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
                {
                  <div key={Proverb.id} className='ml-20 mr-20'>
                    <div className='Header '>
                      <h2 className='font-bold  text-base '>{Proverb.TitleofProverb}</h2>
                    </div>
                    <div className='Description mt-2 '>
                      <p>{Proverb.Proverb}</p>
                      <p className='text-sm font-thin text-gray-400'>20th, March 2024</p> <br />
                    </div>
                  </div>
                },
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}
export default Proverb