import NavBar from "../NavBar";
import Footer from '../Pages/Footer';
import BottomStory from "./BottomStory";
import axios from 'axios';
// import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

interface Story {
  _id: string;
  Title: string;
  image: string;
  Description: string;
  createdAt: string;
  Author: string;
}

export default function Storyview() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedStory, setExpandedStory] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    axios.get(`https://babystory-server.onrender.com/Stories`)
      .then((response) => {
        setStories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('error', error);
        setLoading(false);
      });
  }, []);

  const toggleExpandStory = (id: string) => {
    setIsAnimating(true);
    setExpandedStory(expandedStory === id ? null : id);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid gap-8">
          {loading ? (
            <div className="text-center py-12">Loading...</div>
          ) : (
            stories.map((story) => (
              <div
                key={story._id}
                className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md
                  ${expandedStory === story._id ? 'shadow-lg ring-1 ring-blue-100' : ''}`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 hover:text-blue-600 mb-2 cursor-pointer">
                        {story.Title}
                      </h2>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-blue-600">by {story.Author || 'BYIRINGIRO'}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-500">
                          {new Date(story.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {story.image && (
                    <div className={`aspect-w-16 aspect-h-9 mb-4 transition-all duration-300
                      ${expandedStory === story._id ? 'h-96' : 'h-64'}`}>
                      <img 
                        src={story.image} 
                        alt={story.Title} 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  )}
                  
                  <div className={`prose prose-lg max-w-none transition-all duration-300 ease-in-out
                    ${expandedStory === story._id ? 'mt-6' : 'mt-4'}`}>
                    <div 
                      className={`text-gray-700 leading-relaxed relative
                        ${expandedStory === story._id ? 'line-clamp-none' : 'line-clamp-3'}
                        ${isAnimating ? 'opacity-90' : 'opacity-100'}`}
                    >
                      {story.Description}
                    </div>
                    {expandedStory !== story._id && story.Description && (
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
                    )}
                  </div>
                  
                  <div className={`flex justify-between items-center transition-all duration-300
                    ${expandedStory === story._id ? 'mt-8 pt-6 border-t border-gray-100' : 'mt-6'}`}>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                        Popular
                      </span>
                    </div>
                    <button 
                      onClick={() => toggleExpandStory(story._id)}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group"
                    >
                      {expandedStory === story._id ? 'Show Less' : 'Read Full Story'}
                      <svg 
                        className={`ml-2 h-4 w-4 transform transition-transform duration-300
                          ${expandedStory === story._id ? 'rotate-180' : ''}
                          ${!expandedStory && 'group-hover:translate-y-0.5'}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d={expandedStory === story._id 
                            ? "M5 15l7-7 7 7"  // Up arrow
                            : "M19 9l-7 7-7-7"  // Down arrow
                          } 
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      
      <div className="mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More Stories</h2>
          <BottomStory />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
