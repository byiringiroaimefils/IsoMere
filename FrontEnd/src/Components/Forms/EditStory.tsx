import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Label } from "flowbite-react";
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toast } from "react-hot-toast";
import { FaArrowLeft, FaImage } from 'react-icons/fa';

export default function EditStory() {
  const navigate = useNavigate();
  const [Title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [Description, setDescription] = useState("");
  const [Author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!Title || !Description || !Author) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("Title", Title);
    if (image) formData.append("image", image);
    formData.append("Description", Description);
    formData.append("Author", Author);

    try {
      await axios.post("https://babystory-server.onrender.com/story", formData);
      toast.success("Story created successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error creating story:", error);
      toast.error("Failed to create story. Please try again.");
    } finally {
      setLoading(false);
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

            {/* Image Upload */}
            <div>
              <Label htmlFor="image" className="text-gray-700 font-medium mb-2 block">
                Story Image
              </Label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition-colors">
                <div className="space-y-1 text-center">
                  {imagePreview ? (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="mx-auto h-48 w-96 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImage(null);
                          setImagePreview("");
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <>
                      <FaImage className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="image-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                        >
                          <span>Upload an image</span>
                          <input
                            id="image-upload"
                            name="image-upload"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </>
                  )}
                </div>
              </div>
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
                disabled={loading}
                className={`px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors
                  ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Publishing...
                  </span>
                ) : (
                  'Publish Story'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

