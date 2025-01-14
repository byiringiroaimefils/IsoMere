import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useUser } from "@clerk/clerk-react";
import defaultAvatar from "../default-avatar-removebg-preview.png";

interface Story {
  _id: string;
  Title: string;
  image: string;
  Description: string;
  createdAt: string;
  Author: string;
}

export default function TopStoryComponent() {
  const { user } = useUser();
  // this for stories
  const [stories, setStories] = useState<Story[]>([]);
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  // this for biblical story
  const [Bstories, setBStories] = useState<Story[]>([]);
  const [BexpandedStory, setExpandedBStory] = useState<string | null>(null);

  useEffect(() => {
    // Fetch 2 regular stories
    axios.get(`https://babystory-server.onrender.com/stories?limit=2`)
      .then((response) => {
        // If the backend doesn't handle the limit, slice the results here
        const limitedStories = response.data.slice(0, 2);
        setStories(limitedStories);
      })
      .catch((error) => {
        console.log('error', error)
      });

    // Fetch 2 biblical stories
    axios.get(`https://babystory-server.onrender.com/selectBiblical?limit=2`)
      .then((response) => {
        // If the backend doesn't handle the limit, slice the results here
        const limitedBStories = response.data.slice(0, 2);
        setBStories(limitedBStories);
      })
      .catch((error) => {
        console.log('error', error)
      });
  }, []);

  const toggleStory = (id: string) => {
    setExpandedStory(expandedStory === id ? null : id);
  };

  return (
    <div className="space-y-8">
      {/* Regular Stories Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Top Stories</h2>
        <div className="space-y-6">
          {stories.map((story, index) => (
            <div 
              key={story._id}
              className="group cursor-pointer"
              onClick={() => toggleStory(story._id)}
            >
              <div className="flex items-start space-x-4">
                {story.image && (
                  <div className="flex-shrink-0">
                    <img 
                      src={story.image} 
                      alt={story.Title}
                      className="w-20 h-20 object-cover rounded-lg shadow-sm group-hover:shadow transition-shadow duration-200"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 text-lg font-bold">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <h3 className="text-gray-900 font-semibold line-clamp-1 group-hover:text-blue-600 transition-colors duration-200">
                      {story.Title}
                    </h3>
                  </div>
                  
                  <div className="mt-1 flex items-center text-sm text-gray-500 space-x-2">
                    {story.Author && (
                      <img
                        src={user?.imageUrl || defaultAvatar} 
                        alt={`${story.Author}'s avatar`}
                        className="h-6 w-6 rounded-full object-cover mr-2"
                      />
                    )}
                    <span>{story.Author || 'BYIRINGIRO'}</span>
                    {/* <span>•</span>
                    <span>{new Date(story.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}</span> */}
                  </div>

                  {expandedStory === story._id && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {story.Description}
                      </p>
                      <Link 
                        to={`/TopStory/${story._id}`}
                        className="mt-2 inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
                      >
                        Read full story
                        <svg 
                          className="ml-1 h-4 w-4" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-3 border-b border-gray-100"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Biblical Stories Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Biblical Stories</h2>
        <div className="space-y-6">
          {Bstories.map((story, index) => (
            <div 
              key={story._id}
              className="group cursor-pointer"
              onClick={() => setExpandedBStory(BexpandedStory === story._id ? null : story._id)}
            >
              <div className="flex items-start space-x-4">
                {story.image && (
                  <div className="flex-shrink-0">
                    <img 
                      src={story.image} 
                      alt={story.Title}
                      className="w-20 h-20 object-cover rounded-lg shadow-sm group-hover:shadow transition-shadow duration-200"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 text-lg font-bold">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <h3 className="text-gray-900 font-semibold line-clamp-1 group-hover:text-blue-600 transition-colors duration-200">
                      {story.Title}
                    </h3>
                  </div>
                  
                  <div className="mt-1 flex items-center text-sm text-gray-500 space-x-2">
                    {story.Author && (
                      <img
                        src={user?.imageUrl || defaultAvatar} 
                        alt={`${story.Author}'s avatar`}
                        className="h-6 w-6 rounded-full object-cover mr-2"
                      />
                    )}
                    <span>{story.Author || 'BYIRINGIRO'}</span>
                    {/* <span>•</span> */}
                    {/* <span>{new Date(story.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}</span> */}
                  </div>

                  {BexpandedStory === story._id && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {story.Description}
                      </p>
                      <Link 
                        to={`/TopBStory/${story._id}`}
                        className="mt-2 inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
                      >
                        Read full story
                        <svg 
                          className="ml-1 h-4 w-4" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-3 border-b border-gray-100"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
