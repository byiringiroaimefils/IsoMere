import { useState } from 'react';
import NavBar from "./NavBar";
import Footer from './Pages/Footer';
import TopStory from "./Top & View/TopStoryComponent";
import Noah from "../assets/Noah.webp";
import Creation from "../assets/Creation.jpg";
import David from "../assets/David and Goliath.webp";
import Read from "../assets/Bh.jpeg";

const stories = [
  { id: 1, title: "Noah and the Ark", image: Noah },
  { id: 2, title: "The 7 Days of Creation", image: Creation },
  { id: 3, title: "David killed Goliath!", image: David },
  { id: 4, title: "Lorem ipsum dolor sit amet", image: Read }
];

export default function Preview() {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  const topics = [
    "Bible Stories",
    "Proverbs",
    "Moral Lessons",
    "Character Development",
    "Faith",
    "Wisdom",
    "Life Teachings"
  ];

  const handleStoryClick = (id: number) => {
    setSelectedStory(id === selectedStory ? null : id);
  };

  return (
    <>
      <NavBar />
      <div className="container mt-10 px-10 py-36 translate-y-[-2%] flex justify-center font-serif">
        <div className="w-full max-w-5xl md:flex justify-between ">
          <div className="card">
            {stories.map((story) => (
              <div
                key={story.id}
                className={`mb-8 ${selectedStory === story.id ? 'border-4 border-indigo-500/75 rounded-lg p-3' : ''}`}
              >
                <h2 className="text-4xl font-bold uppercase cursor-pointer"
                  onClick={() => handleStoryClick(story.id)}
                >
                  {story.title}
                </h2>
                <p className="text-gray-300 text-sm">by BYIRINGIRO</p>
                <br />
                <img src={story.image} alt={story.title} className="object-cover" /> <br />
                <p className="text-gray-400">June 2024</p>
                <br />
              </div>
            ))}
            <div className='flex mb-10 justify-center items-center md:translate-x-64 md:translate-y-20'>
              <button className='w-32 text-white p-1.5  font-bold text-sm bg-blue-500 hover:bg-blue-700'>Explore More</button>
            </div>
          </div>

          <div className="md:w-full md:translate-x-32 md:translate-y-28">
            <div className="md:translate-y-[-13%]  ">
              <div className="">
                <h3 className="text-xl font-semibold mb-4 font-serif">Recommended topics</h3>
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
              </div> 
              <TopStory />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
