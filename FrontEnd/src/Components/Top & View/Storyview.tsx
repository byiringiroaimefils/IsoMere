import NavBar from "../NavBar";
import Footer from '../Pages/Footer';
import BottomStory from "./BottomStory";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

interface Story {
  _id: string;
  Title: string;
  image: string;
  Decription: string;
  createdAt: string;
}

export default function Storyview() {
  const [story, setStory] = useState<Story | null>(null);
  const { id } = useParams();

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
      <div className="container px-4 sm:px-6 md:px-10 py-20 sm:py-28 md:py-36 flex justify-center font-serif">
        <div className="w-full max-w-4xl">
          {story ? (
            <div className="space-y-6">
              <div className="w-full sm:w-[95%]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{story.Title}</h2>
                <p className="text-gray-300 text-xs sm:text-sm mt-2">by BYIRINGIRO</p>
                <img src={story.image} alt="Story Image" className="w-full h-auto object-cover my-4 sm:my-6" />
                <p className="text-sm sm:text-base">{story.Decription}</p>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">{new Date(story.createdAt).toLocaleDateString()}</p>
            </div>
          ) : (
            <p className="text-center">Loading...</p>
          )}
        </div>
      </div>
      <div className="bg-black h-px sm:h-1 mx-4 sm:mx-10"></div>
      <BottomStory />
      <Footer />
    </>
  );
}
