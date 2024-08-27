import NavBar from "../NavBar";
// import IG from "./Bh.jpeg"
import Footer from '../Footer'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import BottomStory from "./BottomStory"



interface Proverb {
  _id: string,
  Title: string,
  Decription: string
  createdAt: string
}

export default function TopProverb() {

  const [Proverb, setProverb] = useState<Proverb>({} as Proverb);
  const { id } = useParams();



  useEffect(() => {
    axios.get(`https://babystory-server.onrender.com/story/${id}`)
      .then((data) => {
        setProverb(data.data);
      })
      .catch((error) => {
        console.log('error', error)
      })
  }, [id]);




  return (
    <>
      <NavBar />
      <div className="container px-10 py-36 translate-y-[-2%] md:ml-20">
        <div className="w-full max-w-4xl flex justify-between gap-20">
          {
            Proverb.map((Proverb) => (
              <div>
                <h2 className="text-4xl font-bold">{Proverb.TitleofProverb}</h2>
                <p className="text-gray-300">by BYIRINGIRO</p><br />
                <p>{Proverb.Decription}</p>
                <p className="text-gray-300">{Proverb.createdAt}</p>
              </div>

            ))}
        </div> <br />
        <div className="flex  gap-[55%]">
          <button className='border p-3 font-bold rounded-full  text-gray-500 hover:bg-black transition-all duration-500 ease-in'>Prev</button>
          <button className='border p-3 font-bold rounded-full  text-gray-500 hover:bg-black transition-all duration-500 ease-in'>Next</button>
        </div>
      </div>
      <div className="bg-black/50 rounded h-1 ml-10 mr-10"></div>
      <BottomStory />
      <div>
        <Footer />
      </div>
    </>
  );
}