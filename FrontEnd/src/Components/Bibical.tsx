import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";
import Footer from './Pages/Footer';
import TopStory from "./Top & View/TopStoryComponent";
import Noah from "../assets/Noah.webp";
import Creation from "../assets/Creation.jpg";
import David from "../assets/David and Goliath.webp";
import Read from "../assets/Bh.jpeg";

const stories = [
  { id: 1, title: "Noah and the Ark", image: Noah, description: "The story of faith, obedience, and God's promise through the great flood." },
  { id: 2, title: "The 7 Days of Creation", image: Creation, description: "How God created the heavens and the earth in seven days." },
  { id: 3, title: "David killed Goliath!", image: David, description: "A young shepherd's courage and faith defeats a mighty warrior." },
  { id: 4, title: "Lorem ipsum dolor sit amet", image: Read, description: "Discover more inspiring biblical stories and their teachings." }
];

export default function Preview() {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  const topics = [
    "Old Testament",
    "New Testament",
    "Parables",
    "Miracles",
    "Prophecies",
    "Life Lessons",
    "Biblical Heroes"
  ];

  const handleStoryClick = (id: number) => {
    setSelectedStory(id === selectedStory ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Biblical Stories */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Featured Biblical Stories</h1>
              
              {/* <Link 
                to="/biblical"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                View All Stories
              </Link> */}

            </div>
            
            <div className="grid gap-8">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md
                    ${selectedStory === story.id ? 'ring-2 ring-blue-500' : ''}`}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h2
                        className="text-2xl font-bold text-gray-900 hover:text-blue-600 mb-2 cursor-pointer"
                        onClick={() => handleStoryClick(story.id)}
                      >
                        {story.title}
                      </h2>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm text-blue-600">by BYIRINGIRO</p>
                        <span className="text-gray-300">•</span>
                        <p className="text-sm text-gray-500">June 2024</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {story.description}
                    </p>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex space-x-2">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                          Faith
                        </span>
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                          History
                        </span>
                      </div>
                      <Link 
                        to={`/biblical/${story.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group"
                      >
                        Read Story
                        <svg 
                          className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Link
                to="/biblical"
                className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2"
              >
                <span>Explore More Stories</span>
                <svg 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Topics */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Biblical Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Stories */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Popular Stories
              </h3>
              <TopStory />
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                <Link 
                  to="/biblical"
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  All Biblical Stories
                </Link>
                <Link 
                  to="/subscribe"
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                  Subscribe for Updates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
