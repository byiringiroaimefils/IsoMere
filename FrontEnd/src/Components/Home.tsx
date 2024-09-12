import axios from 'axios';
import { useState, useEffect, FC } from 'react';
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Pages/Footer";
import Load from "./Service/Loading";
import TopStory from "./Top & View/TopStoryComponent";
import TopProverb from "./Top & View/TopProverbComponent";

interface Story {
  _id: string;
  Title: string;
  image: string;
  Description: string;
  createdAt: string;
  Author: string;
}

const Home: FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState(4);
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  const addMoreStories = () => {
    setLimit((prevLimit) => prevLimit + 4);
  };

  const handleStoryClick = (id: string) => {
    setSelectedStory(prevId => prevId === id ? null : id);
  };

  useEffect(() => {
    const handleAlphabetClick = (e: Event) => {
      const target = e.target as HTMLButtonElement;
      if (target.tagName === 'BUTTON') {
        const speech = new SpeechSynthesisUtterance(target.value);
        window.speechSynthesis.speak(speech);
      }
    };

    const buttonsContainer = document.querySelector(".buttons");
    if (buttonsContainer) {
      buttonsContainer.addEventListener('click', handleAlphabetClick);
    }

    return () => {
      if (buttonsContainer) {
        buttonsContainer.removeEventListener('click', handleAlphabetClick);
      }
    };
  }, []);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get("https://babystory-server.onrender.com/stories");
        setStories(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stories:', error);
        setError('Failed to load stories. Please try again later.');
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center text-center mt-56'>
        <Load />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  return (
    <>
      <NavBar />
      <div className='my-20'>
        <div className='Container mt-44 md:flex justify-around translate-y-[-4%] gap-20 w-screen'>
          <div>
            {stories.slice(0, limit).map(({ _id, Title, image, createdAt }) => (
              <div 
                key={_id} 
                className={`story p-5 sm:pr-8 mr-28 md:w-[650px] md:translate-x-24 cursor-pointer ${selectedStory === _id ? 'border-4 border-indigo-500/75   rounded-lg p-2' : ''}`}
              >
                <Link to={`/StoryView/${_id}`}>
                  <div className='Header'>
                    <h2 
                      className='font-bold text-4xl hover:text-sky-600 hover:cursor-pointer uppercase'
                      onClick={(e) => {
                        e.preventDefault();
                        handleStoryClick(_id);
                      }}
                    >
                      {Title}
                    </h2>
                    <p className='font-thin text-gray-300 text-sm'>by BYIRINGIRO</p> <br />
                    <img src={image} alt={Title} className='object-cover' />
                  </div>
                  <div className='Description mt-4'>
                    <p className='text-sm font-thin text-gray-400'>{new Date(createdAt).toLocaleString()}</p> <br />
                  </div>
                </Link>
              </div>
            ))}
            <div className='flex mb-10 justify-center items-center md:translate-x-80 md:translate-y-20'>
              <button 
                className='w-32 text-white p-1.5 rounded-full text-sm font-bold bg-blue-500 hover:bg-blue-700'
                onClick={addMoreStories}
              >
                Read More
              </button>
            </div>
          </div>
          <div className='mt-5 mx-10'>
            <TopProverb />
            <TopStory />
            <div className="Alphabetics mt-20">
              <h4 className='font-extrabold'>ALPHABETICS</h4>
              <p className='text-sm font-thin text-gray-400'>Click any letter to hear how it's pronounced!</p>
              <div className='buttons grid grid-cols-6 gap-2 mt-4 mr-28 w-full'>
                {[...Array(26)].map((_, i) => {
                  const letter = String.fromCharCode(65 + i);
                  return (
                    <button 
                      key={letter}
                      value={letter}
                      className='border p-2 font-base hover:text-blue-500'
                      aria-label={`Pronounce letter ${letter}`}
                    >
                      {letter}{letter.toLowerCase()}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;