import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";
// import Load from "./Service/Loading";
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
  // const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState(4);
  const [selectedProverb, setSelectedProverb] = useState<string | null>(null);
  const [expandedProverb, setExpandedProverb] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const topics = [
    "Wisdom",
    "Life Lessons",
    "Character",
    "Relationships",
    "Success",
    "Leadership",
    "Spirituality"
  ];

  useEffect(() => {
    const fetchProverbs = async () => {
      try {
        const response = await axios.get("https://babystory-server.onrender.com/proverbs");
        setProverbs(response.data);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching proverbs:', error);
        // setError('Failed to load proverbs. Please try again later.');
        // setLoading(false);
      }
    };

    fetchProverbs();
  }, []);

  const addMoreProverbs = () => {
    setLimit((prevLimit) => prevLimit + 4);
  };

  const handleProverbClick = (id: string) => {
    setSelectedProverb(id === selectedProverb ? null : id);
  };

  const toggleExpandProverb = (id: string) => {
    setIsAnimating(true);
    setExpandedProverb(expandedProverb === id ? null : id);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // if (loading) {
  //   return (
  //     <div className='flex justify-center items-center min-h-screen'>
  //       <Load />
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen">
  //       <div className="text-red-500 text-center p-4 bg-red-50 rounded-lg shadow-sm">
  //         {error}
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Proverbs */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Featured Proverbs</h1>
            </div>
            
            <div className="grid gap-8">
              {proverbs.slice(0, limit).map(({ id, TitleofProverb, Proverb, createdAt }) => (
                <div
                  key={id}
                  className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md
                    ${selectedProverb === id ? 'ring-2 ring-blue-500' : ''}
                    ${expandedProverb === id ? 'shadow-lg' : ''}`}
                >
                  <div className="p-6">
                    <div className="mb-4">
                      <h2
                        className="text-2xl font-bold text-gray-900 hover:text-blue-600 mb-2 cursor-pointer"
                        onClick={() => handleProverbClick(id)}
                      >
                        {TitleofProverb}
                      </h2>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm text-blue-600">by BYIRINGIRO</p>
                        <span className="text-gray-300">•</span>
                        <p className="text-sm text-gray-500">
                          {new Date(createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                    
                    <div className={`prose prose-lg max-w-none transition-all duration-300 ease-in-out
                      ${expandedProverb === id ? 'mt-6' : 'mt-4'}`}>
                      <div 
                        className={`text-gray-700 leading-relaxed relative
                          ${expandedProverb === id ? 'line-clamp-none' : 'line-clamp-3'}
                          ${isAnimating ? 'opacity-90' : 'opacity-100'}`}
                        dangerouslySetInnerHTML={{ __html: Proverb }} 
                      />
                      {expandedProverb !== id && (
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
                      )}
                    </div>
                    
                    <div className={`flex justify-between items-center transition-all duration-300
                      ${expandedProverb === id ? 'mt-8 pt-6 border-t border-gray-100' : 'mt-6'}`}>
                      <div className="flex space-x-2">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                          Wisdom
                        </span>
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                          Life Lessons
                        </span>
                      </div>
                      <button 
                        onClick={() => toggleExpandProverb(id)}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group"
                      >
                        {expandedProverb === id ? 'Show Less' : 'Read Full Proverb'}
                        <svg 
                          className={`ml-2 h-4 w-4 transform transition-transform duration-300
                            ${expandedProverb === id ? 'rotate-180' : ''}
                            ${!expandedProverb && 'group-hover:translate-y-0.5'}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d={expandedProverb === id 
                              ? "M5 15l7-7 7 7"  // Up arrow
                              : "M19 9l-7 7-7-7"  // Down arrow
                            } 
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {proverbs.length > limit && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={addMoreProverbs}
                  className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2"
                >
                  <span>Load More Proverbs</span>
                  <svg 
                    className="h-4 w-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Topics */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Wisdom Categories
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
          {/* Add some authorisation  */}

              <div className="space-y-3">
                <Link 
                  to="/FormProverb"
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add New Proverb
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
};

export default Proverb;
