import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from "react-router-dom";
import { Label } from "flowbite-react";
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FaArrowLeft, FaQuoteLeft } from 'react-icons/fa';
import { useUser } from "@clerk/clerk-react";
// import defaultAvatar from "./default-avatar-removebg-preview.png";


export default function EditProverb() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { id } = useParams();
  const [TitleofProverb, setTitleofProverb] = useState("");
  const [Proverb, setProverb] = useState("");




  useEffect(() => {
    const fetchProverbbyId = async () => {
      try {
        const response = await axios.get(`https://babystory-server.onrender.com/proverb/${id}`);
        const proverb = response.data;
        setTitleofProverb(proverb.TitleofProverb);
        setProverb(proverb.Proverb);
      } catch (error) {
        console.error('Error fetching proverb:', error);
      }
    };

    fetchProverbbyId();
  }, [id]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!TitleofProverb || !Proverb) {
      alert("Please fill in all required fields");
      return;
    }

    const authorName = user?.fullName || user?.username || "Anonymous";
    const user_profile = user?.imageUrl;


    const data = {
      TitleofProverb: TitleofProverb,
      Author_Image: user_profile,
      Author: authorName,
      Proverb: Proverb
    };

    try {
      await axios.put(`https://babystory-server.onrender.com/EditProverb/${id}`, data);
      alert("Proverb updated successfully!");
      navigate("/Setting/Proverb");
    } catch (error: any) {
      console.error("Error updating proverb:", error);
      alert("Failed to update proverb. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/Setting"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Prev
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Update Your Proverb</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Input */}
            <div>
              <Label htmlFor="title" className="text-gray-700 font-medium mb-2 block">
                Proverb Title
              </Label>
              <input
                id="title"
                type="text"
                value={TitleofProverb}
                onChange={(e) => setTitleofProverb(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter a meaningful title"
                required
              />
            </div>
            {/* Proverb Content */}
            <div>
              <Label htmlFor="content" className="text-gray-700 font-medium mb-2 block">
                Proverb Content
              </Label>
              <div className="relative">
                <FaQuoteLeft className="absolute top-3 left-3 text-gray-300 h-5 w-5" />
                <div className="prose prose-sm max-w-none pl-10">
                  <CKEditor
                    editor={ClassicEditor}

                    config={{
                      toolbar: {
                        items: [
                          'heading',
                          '|',
                          'bold',
                          'italic',
                          'fontSize',
                          'fontFamily',
                          'fontColor',
                          '|',
                          'link',
                          'bulletedList',
                          'numberedList',
                          'blockQuote'
                        ]
                      },
                      heading: {
                        options: [
                          { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                          { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                          { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                        ]
                      },
                    }}


                    data={Proverb}
                    onChange={(_event, editor) => {
                      setProverb(editor.getData());
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6">
              <button
                type="submit"
                className={`px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors`}
              >
                update Proverb
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
