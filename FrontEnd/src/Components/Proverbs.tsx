import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "./NavBar";
import Load from "./Service/Loading";
import TopStory from "./Top & View/TopStoryComponent";
import Footer from './Pages/Footer';

interface Proverb {
  id: string;
  TitleofProverb: string;
  Proverb: string;
  createdAt: string;
}

const Proverb: FC = () => {
  const [proverbs, setProverbs] = useState<Proverb[]>([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState(4);

  const topics = [
    "Bible Stories",
    "Proverbs",
    "Moral Lessons",
    "Character Development",
    "Faith",
    "Wisdom",
    "Life Teachings"
  ];

  useEffect(() => {
    const fetchProverbs = async () => {
      try {
        const response = await axios.get("https://babystory-server.onrender.com/proverbs");
        setProverbs(response.data);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching proverbs:', error);
        setError('Failed to load proverbs. Please try again later.');
        // setLoading(false);
      }
    };

    fetchProverbs();
  }, []);

  const addMoreProverbs = () => {
    setLimit((prevLimit) => prevLimit + 4);
  };

  // if (loading) {
  //   return (
  //     <div className='flex justify-center text-center mt-56'>
  //       <Load />
  //     </div>
  //   );
  // }

  // if (error) {
  //   return <div className="text-center text-red-500 mt-10">{error}</div>;
  // }

  return (
    <>
      <NavBar />
      <div className='w-Full font-serif'>
        <div className='my-20'>
          <div className='md:flex justify-center mt-28'>
            <div>
              {proverbs.slice(0, limit).map(({ id, TitleofProverb, Proverb, createdAt }) => (
                <div key={id} className='ml-10 mr-10'>
                  <div className='Header'>
                    <h2 className='font-bold text-3xl'>{TitleofProverb}</h2>
                    <p className='mt-2 text-sky-500'>by BYIRINGIRO</p>
                  </div>
                  <div className='Description mt-2 w-[90%]'>
                    <p dangerouslySetInnerHTML={{ __html: Proverb }} />
                    <p className='text-sm font-thin text-gray-400'>{new Date(createdAt).toString().replace(/\sGMT.*$/, '')}</p> <br />
                  </div>
                </div>
              ))}
              <div className='flex mb-10 justify-center items-center md:translate-x-64 md:translate-y-20'>
                <button className='w-32 text-white p-1.5  font-bold text-sm bg-blue-500 hover:bg-blue-700' onClick={addMoreProverbs}>Read More</button>
              </div>
            </div>
            {/* <div className='mx-auto w-full md:translate-x-[-2%] translate-x-7 mr-12'>
              <div className="">
                <h3 className="text-xl font-semibold mb-4">Recommended topics</h3>
                <div className="flex flex-wrap gap-3">
                  {topics.map((topic, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-gray-300 transition-colors"
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </div> <br /><br />
              <TopProverb />
            </div> */}
            <div className="md:w-full  md:translate-y-28">
              <div className="md:translate-y-[-13%]  ">
                <div className="">
                  <h3 className="text-xl font-semibold mb-4">Recommended topics</h3>
                  <div className="flex flex-wrap gap-3">
                    {topics.map((topic, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-gray-300 transition-colors"
                      >
                        {topic}
                      </div>
                    ))}
                  </div>
                </div> <br /><br />
                <TopStory />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Proverb;
