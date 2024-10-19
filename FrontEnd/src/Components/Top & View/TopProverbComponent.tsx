import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface Proverb {
  _id: string;
  TitleofProverb: string,
}

export default function TopStoryComponent() {
  const [Proverbs, setProverbs] = useState<Proverb[]>([]);

  useEffect(() => {
    axios.get('https://babystory-server.onrender.com/proverbs')
      .then((response) => {
        setProverbs(response.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  return (
    <>
      <div className="topstory mr-2 font-serif">
        <h3 className="text-xl font-semibold mb-4">Most Popular Proverbs</h3> 
        <br />
        <ul>
          {Proverbs.slice(0, 3).map((proverb, index) => (
            <Link to={`/TopProverb/${proverb._id}`}>
              <li key={proverb._id} className="text-lg  cursor-pointer">
                <span className="text-gray-400 text-3xl font-extrabold">
                  {(index + 1).toString().padStart(2, '0')}.
                </span>
                {proverb.TitleofProverb}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
