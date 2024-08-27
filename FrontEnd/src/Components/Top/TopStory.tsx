import NavBar from "../NavBar";
import Footer from '../Footer'
import BottomStory from "./BottomStory"
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'





interface Story {
  _id: string,
  Title: string,
  image: string,
  Decription: string
  createdAt: string
}

export default function TopStory() {
  const [story, setStory] = useState<Story>({} as Story);
  const { id } = useParams();



  useEffect(() => {
    axios.get(`https://babystory-server.onrender.com/story/${id}`)
      .then((data) => {
        setStory(data.data);
        console.log(data.data)
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
            story.map((story)=>(
          <div>
            <div className="w-[95%]">
              <h2 className="text-4xl font-bold">{story.Title}</h2>
              <p className="text-gray-300">BYIRINGIRO</p><br />
              <img src={story.image} alt="" className="" /><br /><br />
              <p>{story.Decription}</p>
            </div>
            <p className="text-gray-400">{story.createdAt}</p>
          </div>
          ))}
        </div> <br /><br />
        <div className="flex  gap-[55%]">
          <button className='border p-3 font-bold rounded-full  text-gray-500 hover:bg-black transition-all duration-500 ease-in'>Prev</button>
          <button className='border p-3 font-bold rounded-full  text-gray-500 hover:bg-black transition-all duration-500 ease-in'>Next</button>
        </div>
      </div>
      <div className="bg-black bg-black/50 rounded  h-1 ml-10 mr-10"></div>
      <BottomStory />
      <div>
        <Footer />
      </div>
    </>
  );
}