import { Link } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from 'react'

interface Story {
    _id: string,
    image: string,
    Title: string,
    createdAt: string
}

export default function BottomStory() {
    const [stories, setStories] = useState<Story[]>([]);

    useEffect(() => {
        axios.get(`https://babystory-server.onrender.com/stories`)
            .then((data) => {
                setStories(data.data);
            })
            .catch((error) => {
                console.log('error', error)
            })
    }, []);

    return (
        <div className="container mx-auto px-4 mb-10 font-serif">
            <h2 className="text-2xl font-extrabold mt-8 mb-6">POPULAR STORIES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {stories.slice(0, 3).map((Story) => (
                    <Link key={Story._id} to={`/TopStory/${Story._id}`}>
                        <div className="flex flex-col h-full">
                            <img src={Story.image} alt={Story.Title} className="w-full h-48 object-cover rounded-lg" />
                            <h2 className="font-extrabold text-xl uppercase  mt-4">{Story.Title}</h2>
                            <p className="text-base text-gray-400 line-clamp-2">Lorem ipsu dolor  amet consectetur adipisicing Lorem ipsum dolor sit amet.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</ p>
                            {/* <p className="text-gray-400 text-center mt-2">{new Date(Story.createdAt).toLocaleDateString()}</p> */}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
