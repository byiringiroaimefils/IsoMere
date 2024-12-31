import NavBar from "../NavBar";
import Footer from '../Pages/Footer';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import BottomStory from "./BottomStory";
import {  FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface Proverb {
  _id: string;
  TitleofProverb: string;
  Proverb: string;
  createdAt: string;
  Author?: string;
}

export default function TopProverb() {
  const [proverb, setProverb] = useState<Proverb | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://babystory-server.onrender.com/proverb/${id}`)
      .then((response) => {
        setProverb(response.data);
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="animate-pulse flex flex-col items-center space-y-4">
            <div className="w-48 h-6 bg-gray-200 rounded"></div>
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
            <div className="w-96 h-32 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {proverb && (
          <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="max-w-prose mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {proverb.TitleofProverb}
                </h1>

                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">
                        {(proverb.Author || 'BYIRINGIRO').charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">{proverb.Author || 'BYIRINGIRO'}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(proverb.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative py-8">
                  <FaQuoteLeft className="absolute top-0 left-0 text-blue-100 h-8 w-8" />
                  <div className="prose prose-lg max-w-none px-10">
                    <p className="text-gray-700 text-xl leading-relaxed"
                     dangerouslySetInnerHTML={{ __html: proverb.Proverb }}
                    >
                      {/* {proverb.Proverb} */}
                    </p>
                  </div>
                  <FaQuoteRight className="absolute bottom-0 right-0 text-blue-100 h-8 w-8" />
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Reflection
                  </h2>
                  <p className="text-gray-600">
                    This proverb teaches us about wisdom and understanding in our daily lives.
                    Take a moment to reflect on its meaning and how it applies to your journey.
                  </p>
                </div>
              </div>
            </div>
          </article>
        )}
      </main>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BottomStory />
      </div>

      <Footer />
    </div>
  );
}
