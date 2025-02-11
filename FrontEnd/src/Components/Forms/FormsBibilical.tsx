import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Label } from "flowbite-react";
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toast } from "react-hot-toast";
import { FaArrowLeft } from 'react-icons/fa';
import { useUser } from "@clerk/clerk-react";
// import defaultAvatar from "./default-avatar-removebg-preview.png";

export default function FormsBibilical() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [Title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [Decription, setDecription] = useState("");
  const [formdata, setFormdata] = useState({
    Title: "",
    Author: "",
    Author_Image: "",
    image: "",
    Decription: ""
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
    if (!Title || !Decription || !image) {
      alert("Please fill in all required fields");
      return;
    }
  
    try {
      await axios.post("https://babystory-server.onrender.com/InsertBiblical", formdata);
      toast.success("");
      alert("Biblical Story created successfully!")
      navigate("/Setting/Proverb");
    } catch (error) {
      console.error("Error creating story:", error);
      alert("Failed to create story. Please try again.")
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
          <h1 className="text-3xl font-bold text-gray-900">Share Your Biblical Story</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Input */}
            <div>
              <Label htmlFor="title" className="text-gray-700 font-medium mb-2 block">
                Story Title
              </Label>
              <input
                id="title"
                type="text"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter a captivating title"
                required
              />
            </div>

     {/* Author Selection */}
     {/* <div>
              <Label htmlFor="author" className="text-gray-700 font-medium mb-2 block">
                Author
              </Label>
              <select
                id="author"
                value={Author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select author type</option>
                <option value="Parents">Parents</option>
                <option value="Others">Others</option>
              </select>
            </div> */}

            {/* Image URL Input */}
            <div>
              <Label htmlFor="image-url" className="text-gray-700 font-medium mb-2 block">
                Story Image URL
              </Label>
              <input
                id="image-url"
                type="text"
                onChange={(e) => setImage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter image URL"
              />
            </div>

       

            {/* Story Content */}
            <div>
              <Label htmlFor="content" className="text-gray-700 font-medium mb-2 block">
                Story Content
              </Label>
              <div className="prose prose-sm max-w-none">
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



                  data={Decription}
                  onChange={(_event, editor) => {
                    setDecription(editor.getData());
                  }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Publish Story
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

