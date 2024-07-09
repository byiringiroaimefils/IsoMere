import axios from 'axios'
import { useState, useEffect } from 'react'
import NavBar from "./NavBar";
import { FC } from "react"
import ReactPlayer from "react-player"
import Load from "./Pages/Loading";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import story from"../assets/Guess_How_Much_I_Love_You.pdf"

interface Story {
  id: string,
  Title: string,
  image: string,
  Decription: string,
  createdAt: string,
  Author: string,
  likes: number,
  dislikes: number
}

interface UserInteraction {
  [storyId: string]: 'like' | 'dislike' | null;
}

const Home: FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [userInteractions, setUserInteractions] = useState<UserInteraction>({});

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
        const storiesWithReactions = response.data.map((story: Story) => ({
          ...story,
          likes: 0,
          dislikes: 0
        }));
        setStories(storiesWithReactions);
        setLoading(false);
      })
      .catch((error) => {
        console.log('error', error);
        setLoading(false);
      });
  }, []);

  const handleReaction = (id: string, reactionType: 'like' | 'dislike') => {
    setStories(prevStories =>
      prevStories.map(story => {
        if (story.id === id) {
          const currentInteraction = userInteractions[id];
          let newLikes = story.likes;
          let newDislikes = story.dislikes;

          if (currentInteraction === reactionType) {
            if (reactionType === 'like') newLikes--;
            else newDislikes--;
            setUserInteractions(prev => ({ ...prev, [id]: null }));
          } else {
            if (reactionType === 'like') {
              newLikes++;
              if (currentInteraction === 'dislike') newDislikes--;
            } else {
              newDislikes++;
              if (currentInteraction === 'like') newLikes--;
            }
            setUserInteractions(prev => ({ ...prev, [id]: reactionType }));
          }

          return { ...story, likes: newLikes, dislikes: newDislikes };
        }
        return story;
      })
    );
  };

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
            <div className='Container flex justify-around mt-6 w-screen'>
              <div>
                {stories.map(({ id, Title, Author, image, Decription, createdAt, likes, dislikes }) => (
                  <div key={id} className='story p-8 mr-28 md:w-[650px] md:translate-x-10 ' >
                    <div className='Header '>
                      <h2 className='font-bold  text-base '>{Title}</h2>
                      <p className='text-sm font-thin text-gray-400'>{Author}</p> <br />
                      <img src={image} alt="" className='w-full  object-cover' />
                    </div>
                    <div className='Description mt-4'>
                      <p dangerouslySetInnerHTML={{ __html:Decription }}/>
                      <p className='text-sm font-thin text-gray-400'>{new Date(createdAt).toString().replace(/\sGMT.*$/, '')}</p> <br />
                    </div>
                    <div className="icons flex gap-2">
                      <MdThumbUp 
                        onClick={() => handleReaction(id, 'like')} 
                        className={userInteractions[id] === 'like' ? 'text-blue-500' : ''}
                      />
                      <span className='translate-y-[-6px]'>{likes}</span>
                      <MdThumbDown 
                        onClick={() => handleReaction(id, 'dislike')} 
                        className={userInteractions[id] === 'dislike' ? 'text-red-500' : ''}
                      />
                      <span className='translate-y-[-6px]'>{dislikes}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className='UpdatedStory mt-5 mr-12 '>
                <div className="topstory">
                  <h4 className='font-extrabold'>Top Stories</h4>
                  <p className='text-sm font-thin text-gray-400'>Here you can download topest Story</p>

                  <ul>
                    <li className='text-lg cursor-pointer'><span className='text-gray-400 text-xl  '>1.</span> <a href="" download={story}>Guess How Much I Love You?</a> </li>
                    <li className='text-lg cursor-pointer'><span className='text-gray-400 text-xl'>2.</span><a href="" download={story}>The Tale of Peter Rabbit.</a></li>
                    <li className='text-lg cursor-pointer'><span className='text-gray-400 text-xl'>3.</span> <a href="" download={story}>Alice's Adventures in Wonderland.</a> </li>
                  </ul>
                </div>
                <div className="Video mt-20 ">
                  <h4 className='font-extrabold'>Video</h4>
                  <p className='text-sm font-thin text-gray-400'>Open beatful cartoon</p> <br />
                  <ReactPlayer
                    className='react-player'
                    controls
                    url='https://www.youtube.com/watch?v=bisUxWGk-Nw'
                    width='120%'
                    height='200%'
                  />
                </div>
                <div className="Alphabetics mt-20">
                  <h4 className='font-extrabold '>Alphabetics</h4>
                  <p className='text-sm font-thin text-gray-400'>Click to any Alphabetic then listen how to read!!   </p>
                  <div className='buttons grid grid-cols-6 gap-2 mt-4 '>
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
    </>
  )
}

export default Home;