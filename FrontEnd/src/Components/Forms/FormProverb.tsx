import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Label } from "flowbite-react";
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FaArrowLeft, FaQuoteLeft } from 'react-icons/fa';
import { useUser } from "@clerk/clerk-react";
// import defaultAvatar from "./default-avatar-removebg-preview.png";


export default function FormProverb() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [formdata, setFormdata] = useState({
    TitleofProverb: "",
    Author: "",
    Author_Image: "",
    Proverb: ""
  });

  useEffect(() => {
    if (user) {
      setFormdata(prev => ({
        ...prev,
        Author: user.fullName || user.username || "Anonymous",
        Author_Image: user.imageUrl || "/default-avatar.png"
      }));
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formdata.TitleofProverb || !formdata.Proverb) {
      alert("Please fill in all required fields");
      return;
    }

    console.log("Sending data:", formdata);
    
    try {
      const response = await axios.post("https://babystory-server.onrender.com/proverb", formdata);
      console.log("Response:", response.data);
      alert("Proverb created successfully!");
      navigate("/Setting/Proverb");
    } catch (error: any) {
      console.error("Error creating proverb:", error);
      alert("Failed to create proverb. Please try again.");
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
            Back to Proverbs
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Share Your Proverb</h1>
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
                value={formdata.TitleofProverb}
                onChange={(e) => setFormdata(prev => ({ ...prev, TitleofProverb: e.target.value }))}
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
  
                    data={formdata.Proverb}
                    onChange={(_event, editor) => {
                      setFormdata(prev => ({ ...prev, Proverb: editor.getData() }));
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
                Publish Proverb
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
