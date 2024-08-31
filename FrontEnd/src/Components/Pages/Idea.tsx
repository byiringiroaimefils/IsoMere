import React, { useState } from 'react';
import NavBar from "../NavBar";
import Footer from '../Footer';

export default function Idea() {
    const [comment, setComment] = useState('');
    const [idea, setIdea] = useState('');

    const handleCommentChange = (e: React.FormEvent<HTMLFormElement>) => setComment(e.target.value);
    const handleIdeaChange = (e: React.FormEvent<HTMLFormElement>) => setIdea(e.target.value);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Comment:', comment);
        console.log('Idea:', idea);
        setComment('');
        setIdea('');
    };

    return (
        <>
            <NavBar />
            <main className="container mt-20 mx-auto px-4 max-w-2xl">
                <h1 className="text-4xl font-bold text-center mb-8 text-sky-500">Submit Your Idea and Comment</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                            Comment:
                        </label>
                        <textarea
                            id="comment"
                            value={comment}
                            onChange={handleCommentChange}
                            placeholder="Enter your comment"
                            rows="4"
                            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-sky-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="idea" className="block text-sm font-medium text-gray-700 mb-1">
                            Idea:
                        </label>
                        <textarea
                            id="idea"
                            value={idea}
                            onChange={handleIdeaChange}
                            placeholder="Enter your idea"
                            rows="4"
                            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-sky-500"
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button 
                            type="submit" 
                            className=" w-full rounded-full px-6 py-5 text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </main> <br /><br />
            <Footer />
        </>
    );
}