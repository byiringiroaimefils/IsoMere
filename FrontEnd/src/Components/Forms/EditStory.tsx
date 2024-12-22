import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Label } from "flowbite-react";
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toast } from "react-hot-toast";
import { FaArrowLeft } from 'react-icons/fa';

export default function FormStory() {
  const navigate = useNavigate();
  const [Title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [Description, setDescription] = useState("");
  const [Author, setAuthor] = useState("");
  // const [loading, setLoading] = useState(false);



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!Title || !Description || !image || !Author) {
      toast.error("Please fill in all required fields");
      return;
    }

    const formdata = [
      Title,
      image,
      Description,
      Author

    ]



    try {
      await axios.post("https://babystory-server.onrender.com/story", formdata);
      toast.success("Story created successfully!");
      navigate("/");
      console.log("working")
    } catch (error) {
      console.error("Error creating story:", error);
      toast.error("Failed to create story. Please try again.");
      console.log("not working")
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Share Your Story</h1>
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

            {/* Author Selection */}
            <div>
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
            </div>

            {/* Story Content */}
            <div>
              <Label htmlFor="content" className="text-gray-700 font-medium mb-2 block">
                Story Content
              </Label>
              <div className="prose prose-sm max-w-none">
                <CKEditor
                  editor={ClassicEditor}
                  data={Description}
                  onChange={(_event, editor) => {
                    setDescription(editor.getData());
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

