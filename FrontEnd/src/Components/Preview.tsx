import NavBar from "./NavBar";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import { useState } from 'react';

export default function Preview() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">The Story of the World's Creation</h1>
        <div className="">
          <h2 className="text-xl font-semibold mb-2">Day 1</h2>
          <p className="mb-4">
            Light was the first thing that God created because before day 1, the earth was completely dark. All throughout the creation saga, God employed this same method. He didn't achieve this by stirring a liquid, making a fancy gesture, or using his hands in any way. Instead, according to the Bible, light was created when God simply spoke. God creates light and darkness. He separates them, putting the light in the sky and the darkness on the earth. He names the light "day" and the darkness "night." He also establishes the cycle of day and night.
          </p>
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleLike}
              className="flex items-center space-x hover:text-blue-600"
            >
              <MdThumbUp className="text-xl" />
              <span>{likes}</span>
            </button>
            <button 
              onClick={handleDislike}
              className="flex items-center space-x-1 hover:text-red-600"
            >
              <MdThumbDown className="text-xl" />
              <span>{dislikes}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}