import axios from 'axios'
import { useState, useEffect } from 'react'
import NavBar from "./NavBar";
import { FC } from "react"
import Footer from "./Footer"
import { Link } from "react-router-dom";
import Load from "./Pages/Loading";
import TopStory from "./Top/TopStoryComponent";
import TopProverb from "./Top/TopProverbComponent";

interface Story {
  id: string,
  Title: string,
  image: string,
  Decription: string,
  createdAt: string,
  Author: string,
}



const Home: FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buttons = document.querySelectorAll(".buttons button")
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const buttonValue = (e.target as HTMLButtonElement).value;
        const speech = new SpeechSynthesisUtterance();
        speech.text = buttonValue
        console.log(buttonValue)
        window.speechSynthesis.speak(speech)
      })
    })
  }, [])

  useEffect(() => {
    axios.get("https://babystory-server.onrender.com/stories")
      .then((response) => {
        setStories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('error', error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className='my-20'>
        {
          loading ? (
            <div className='flex justify-center text-center mt-56'>
              <Load />
            </div>
          ) : (
            <div className='Container mt-44  md:flex justify-around translate-y-[-4%]  gap-20 w-screen '>
              <div className=''>
                {stories.map(({ id, Title, image, createdAt }) => (

                  <div key={id} className='story p-8 mr-28 md:w-[650px] md:translate-x-24 cursor-pointer' >
                    <Link to={`/StoryView`}>
                      <div className='Header '>
                        <h2 className='font-bold  text-4xl  hover:text-sky-600 hover:cursor-pointer uppercase'>{Title}</h2>
                        <p className='text-sm font-thin text-gray-400'>by BYIRINGIRO</p> <br />
                        <img src={image} alt="" className='w-[75%]  object-cover' />
                      </div>
                      <div className='Description mt-4'>
                        <p className='text-sm font-thin text-gray-400'>{new Date(createdAt).toString().replace(/\sGMT.*$/, '')}</p> <br />
                      </div>
                    </Link>
                  </div>

                ))}
                <div className='flex  mb-10 justify-center items-center  md:translate-x-72 md:translate-y-20 '>
                  <button className=' w-32 text-white p-1.5  rounded-full font-bold  bg-blue-500 hover:bg-blue-700 ' >Read More</button>
                </div>
              </div>
              <div className='mt-5 mx-10  '>
                <TopProverb />
                <TopStory />
                <div className="Alphabetics mt-20 ">
                  <h4 className='font-extrabold '>ALPHABETICS</h4>
                  <p className='text-sm font-thin text-gray-400'>Click to any Alphabetic then listen how to read!!   </p>
                  <div className='buttons grid grid-cols-6 gap-2 mt-4 mr-28'>
                    <button value='A' className='border p-2 font-base hover:text-blue-500'>Aa</button>
                    <button value='B' className='border p-2 font-base hover:text-blue-500'>Bb</button>
                    <button value='C' className='border p-2 font-base hover:text-blue-500'>Cc</button>
                    <button value='D' className='border p-2 font-base hover:text-blue-500'>Dd</button>
                    <button value='E' className='border p-2 font-base hover:text-blue-500'>Ee</button>
                    <button value='F' className='border p-2 font-base hover:text-blue-500'>Ff</button>
                    <button value='G' className='border p-2 font-base hover:text-blue-500'>Gg</button>
                    <button value='H' className='border p-2 font-base hover:text-blue-500'>Hh</button>
                    <button value='I' className='border p-2 font-base hover:text-blue-500'>Ii</button>
                    <button value='J' className='border p-2 font-base hover:text-blue-500'>Jj</button>
                    <button value='K' className='border p-2 font-base hover:text-blue-500'>Kk</button>
                    <button value='L' className='border p-2 font-base hover:text-blue-500'>Ll</button>
                    <button value='M' className='border p-2 font-base hover:text-blue-500'>Mm</button>
                    <button value='N' className='border p-2 font-base hover:text-blue-500'>Nn</button>
                    <button value='O' className='border p-2 font-base hover:text-blue-500'>Oo</button>
                    <button value='P' className='border p-2 font-base hover:text-blue-500'>Pp</button>
                    <button value='Q' className='border p-2 font-base hover:text-blue-500'>Qq</button>
                    <button value='R' className='border p-2 font-base hover:text-blue-500'>Rr</button>
                    <button value='S' className='border p-2 font-base hover:text-blue-500'>Ss</button>
                    <button value='T' className='border p-2 font-base hover:text-blue-500'>Tt</button>
                    <button value='U' className='border p-2 font-base hover:text-blue-500'>Uu</button>
                    <button value='V' className='border p-2 font-base hover:text-blue-500'>Vv</button>
                    <button value='W' className='border p-2 font-base hover:text-blue-500'>Ww</button>
                    <button value='X' className='border p-2 font-base hover:text-blue-500'>Xx</button>
                    <button value='Y' className='border p-2 font-base hover:text-blue-500'>Yy</button>
                    <button value='Z' className='border p-2 font-base hover:text-blue-500'>Zz</button>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Home;