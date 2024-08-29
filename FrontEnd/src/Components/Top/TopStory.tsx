import NavBar from "../NavBar";
import Footer from '../Footer';
import BottomStory from "./BottomStory";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

interface Story {
  _id: string;
  Title: string;
  image: string;
  Decription: string
  createdAt: string;
}

export default function TopStory() {
  const [story, setStory] = useState<Story | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios.get(`https://babystory-server.onrender.com/story/${id}`)
      .then((response) => {
        setStory(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [id]);

  return (
    <>
      <NavBar />
      <div className="container px-10 py-36 translate-y-[-2%] md:ml-20">
        {story ? (
          <div className="w-full max-w-4xl flex justify-between gap-20">
            <div className="w-[95%]">
              <h2 className="text-4xl font-bold uppercase">{story.Title}</h2>
              <p className="text-gray-300">by BYIRINGIRO</p>
              <ul className="flex gap-4 mt-1 ml-2">
                <li className="text-green-600"><FaWhatsappSquare/></li>
                <li className="text-sky-600"><FaFacebook/></li>
                <li className="text-red-700/50">< FaInstagramSquare /></li>
              </ul> <br />
              <img src={story.image} alt="Story Image" className="" /><br /><br />
              <p className="" dangerouslySetInnerHTML={{ __html: story.Decription }} />
              <p className="text-gray-400">{new Date(story.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <br /><br />
        <div className="flex gap-[55%]">
          <button className='border p-3 font-bold rounded-full text-gray-500 hover:bg-black transition-all duration-500 ease-in'>Prev</button>
          <button className='border p-3 font-bold rounded-full text-gray-500 hover:bg-black transition-all duration-500 ease-in'>Next</button>
        </div>
      </div>
      <div className="bg-black bg-black/50 rounded h-1 ml-10 mr-10"></div>
      <BottomStory />
      <Footer />
    </>
  );
}
