import { Link } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from 'react'

interface Story {
    _id: string,
    image: string,
    Title: string,
    Decription: string,
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
            {/* <h2 className="text-2xl font-extrabold mt-8 mb-6"></h2> */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Story</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 -translation-x-10">
                {stories.slice(0, 5).map((Story) => (
                    <Link key={Story._id} to={`/TopStory/${Story._id}`}>
                        <div className="flex flex-col h-full">
                            <img src={Story.image} alt={Story.Title} className="w-full h-48 object-cover rounded-lg" />
                            <h2 className="font-extrabold text-xl uppercase  mt-4">{Story.Title}</h2>
                            <p className="text-base text-gray-400 line-clamp-2" 
                              dangerouslySetInnerHTML={{ __html: Story.Decription }}
                            
                            ></ p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
