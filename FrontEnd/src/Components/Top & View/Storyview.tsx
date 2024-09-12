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

export default function Stoiryview() {
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
      <div className="container px-10 py-36 translate-y-[-2%] flex justify-center">
        <div className="w-full max-w-4xl flex justify-between gap-20">
          {story ? (
            <div>
              <div className="w-[95%]">
                <h2 className="text-4xl font-bold">{story.Title}</h2>
                <p className="text-gray-300 text-sm">by BYIRINGIRO</p><br />
                <img src={story.image} alt="Story Image" className="" /><br /><br />
                <p>{story.Decription}</p>
              </div>
              <p className="text-gray-400">{new Date(story.createdAt).toLocaleDateString()}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className="bg-black h-1 ml-10 mr-10"></div>
      <BottomStory />
      <Footer />
    </>
  );
}
