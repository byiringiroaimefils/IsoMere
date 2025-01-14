import NavBar from "../NavBar";
import Footer from '../Pages/Footer';
import BottomStory from "./BottomStory";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import {  FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useUser } from "@clerk/clerk-react";
import defaultAvatar from "../default-avatar-removebg-preview.png";

interface Story {
  _id: string;
  Title: string;
  image: string;
  Decription: string;
  createdAt: string;
  Author: string;
}

export default function TopBStory() {
  const { user } = useUser();
  const [story, setStory] = useState<Story | null>(null);
  const [prevId, setPrevId] = useState<string | null>(null);
  const [nextId, setNextId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStory = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://babystory-server.onrender.com/selectByIdB/${id}`);
        setStory(response.data);

        const allStoriesResponse = await axios.get("https://babystory-server.onrender.com/selectBiblical");
        const allStories = allStoriesResponse.data;
        const currentIndex = allStories.findIndex((s: Story) => s._id === id);
        setPrevId(currentIndex > 0 ? allStories[currentIndex - 1]._id : null);
        setNextId(currentIndex < allStories.length - 1 ? allStories[currentIndex + 1]._id : null);
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  const handleNavigation = (targetId: string | null) => {
    if (targetId) {
      navigate(`/TopStory/${targetId}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="animate-pulse flex flex-col items-center space-y-4">
            <div className="w-48 h-6 bg-gray-200 rounded"></div>
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
            <div className="w-64 h-64 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {story && (
          <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="max-w-prose mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {story.Title}
                </h1>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    {story.Author && (
                      <img
                        src={user?.imageUrl || defaultAvatar} 
                        alt={`${story.Author}'s avatar`}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="text-gray-900 font-medium">{story.Author || 'BYIRINGIRO'}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(story.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                {story.image && (
                  <div className="aspect-w-16 aspect-h-9 mb-8">
                    <img
                      src={story.image}
                      alt={story.Title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                )}

                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: story.Decription }} /> 
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100">
              <div className="flex justify-between p-6">
                <button
                  onClick={() => handleNavigation(prevId)}
                  disabled={!prevId}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors
                    ${prevId 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-gray-400 cursor-not-allowed'}`}
                >
                  <FaArrowLeft className="h-4 w-4" />
                  <span>Previous Story</span>
                </button>

                <button
                  onClick={() => handleNavigation(nextId)}
                  disabled={!nextId}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors
                    ${nextId 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-gray-400 cursor-not-allowed'}`}
                >
                  <span>Next Story</span>
                  <FaArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        )}
      </main>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">More Stories</h2>
        <BottomStory />
      </div>
      
      <Footer />
    </div>
  );
}
