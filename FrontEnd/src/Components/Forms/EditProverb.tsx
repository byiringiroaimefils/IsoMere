import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Label } from "flowbite-react";
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toast } from "react-hot-toast";
import { FaArrowLeft, FaQuoteLeft } from 'react-icons/fa';

export default function FormProverb() {
  const navigate = useNavigate();
  const [TitleofProverb, setTitleofProverb] = useState("");
  const [Proverb, setProverb] = useState("");
  const [Author, setAuthor] = useState("");
  // const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!TitleofProverb || !Proverb || !Author) {
      toast.error("Please fill in all required fields");
      return;
    }

    // setLoading(true);
    const data = {
      TitleofProverb,
      Proverb,
      Author
    };
    console.log(data)
    try {
      await axios.post("http://localhost:8080/proverb", data);
      toast.success("Proverb created successfully!");
      navigate("/Setting/Proverb");
      console.log("Work")

    } catch (error: any) {
      console.log("Not Work")
      console.error("Error creating proverb:", error);
      toast.error(error.response?.data?.message || "Failed to create proverb. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/Setting/Proverb"
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
                value={TitleofProverb}
                onChange={(e) => setTitleofProverb(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter a meaningful title"
                required
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
                Publish Proverb
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
