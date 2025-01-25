import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import { useUser } from "@clerk/clerk-react";
// import defaultAvatar from "../default-avatar-removebg-preview.png";

interface Proverb {
  _id: string;
  TitleofProverb: string;
  Author_Image:string,
  Proverb: string;
  createdAt: string;
  Author?: string;
}

export default function TopProverbComponent() {
  // const { user } = useUser();
  const [proverbs, setProverbs] = useState<Proverb[]>([]);
  const [expandedProverb, setExpandedProverb] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://babystory-server.onrender.com/proverbs')
      .then((response) => {
        setProverbs(response.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  const toggleProverb = (id: string) => {
    setExpandedProverb(expandedProverb === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {proverbs.slice(0, 3).map((proverb, index) => (
        <div 
          key={proverb._id}
          className="group cursor-pointer"
          onClick={() => toggleProverb(proverb._id)}
        >
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-200">
              <span className="text-blue-600 text-lg font-bold">
                {(index + 1).toString().padStart(2, '0')}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-gray-900 font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                {proverb.TitleofProverb}
              </h3>
              
              <div className="mt-1 flex items-center text-sm text-gray-500 space-x-2">
                {proverb.Author && (
                  <img
                    src={proverb.Author_Image} 
                    alt={`${proverb.Author}'s avatar`}
                    className="h-6 w-6 rounded-full object-cover mr-2"
                  />
                )}
                <span>{proverb.Author || 'BYIRINGIRO'}</span>
                <span>•</span>
                <span>{new Date(proverb.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })}</span>
              </div>

              {expandedProverb === proverb._id && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600 line-clamp-3"
                     dangerouslySetInnerHTML={{ __html: proverb.Proverb }}
                  >
                  </p>
                  <Link 
                    to={`/TopProverb/${proverb._id}`}
                    className="mt-2 inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
                  >
                    Read full proverb
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
  );
}
