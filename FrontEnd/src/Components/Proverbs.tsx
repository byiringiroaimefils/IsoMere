import { FC } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from "./NavBar";
import Load from "./Pages/Loading";
import { MdThumbUp, MdThumbDown } from "react-icons/md";

interface Proverb {
  id: string,
  TitleofProverb: string,
  Proverb: string,
  createdAt: string,
  likes: number,
  dislikes: number
}

interface UserInteraction {
  [proverbId: string]: 'like' | 'dislike' | null;
}

const Proverb: FC = () => {
  const [proverbs, setProverbs] = useState<Proverb[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [userInteractions, setUserInteractions] = useState<UserInteraction>({});

  useEffect(() => {
    axios.get("https://babystory-server.onrender.com/proverbs")
      .then((response) => {
        const proverbsWithReactions = response.data.map((proverb: Proverb) => ({
          ...proverb,
          likes: 0,
          dislikes: 0
        }));
        setProverbs(proverbsWithReactions);
        setLoading(false);
      })
      .catch((error) => {
        console.log('error', error);
        setLoading(false);
      });
  }, []);

  const handleReaction = (id: string, reactionType: 'like' | 'dislike') => {
    setProverbs(prevProverbs =>
      prevProverbs.map(proverb => {
        if (proverb.id === id) {
          const currentInteraction = userInteractions[id];
          let newLikes = proverb.likes;
          let newDislikes = proverb.dislikes;

          if (currentInteraction === reactionType) {
            // User is un-reacting
            if (reactionType === 'like') newLikes--;
            else newDislikes--;
            setUserInteractions(prev => ({ ...prev, [id]: null }));
          } else {
            // User is changing reaction or reacting for the first time
            if (reactionType === 'like') {
              newLikes++;
              if (currentInteraction === 'dislike') newDislikes--;
            } else {
              newDislikes++;
              if (currentInteraction === 'like') newLikes--;
            }
            setUserInteractions(prev => ({ ...prev, [id]: reactionType }));
          }

          return { ...proverb, likes: newLikes, dislikes: newDislikes };
        }
        return proverb;
      })
    );
  };

  return (
    <>
      <NavBar />
      <div className='w-Full mt-5 ' >
        <div className='my-20'>
          {
            loading ? (
              <div className='flex justify-center text-center mt-56'>
                <Load />
              </div>
            ) : (
              <div >
                {
                  proverbs.map(({ id, TitleofProverb, Proverb, createdAt, likes, dislikes }) => (
                    <div key={id} className='ml-10 mr-10'>
                      <div className='Header '>
                        <h2 className='font-bold  text-base '>{TitleofProverb}</h2>
                      </div>
                      <div className='Description mt-2 '>
                        <p dangerouslySetInnerHTML={{ __html:Proverb }}/>
                        <p className='text-sm font-thin text-gray-400'>{new Date(createdAt).toString().replace(/\sGMT.*$/, '')}</p> <br />
                      </div>
                      <div className="icons flex gap-2 mb-5">
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
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Proverb;