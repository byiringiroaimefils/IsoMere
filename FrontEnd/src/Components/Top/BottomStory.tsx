import { Link } from "react-router-dom";
import IG from "./Bh.jpeg"
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
        <div>
            <h2 className="ml-20 mt-5 font-extrabold ">POPULAR STORIES</h2>
            <Link to={'/TopStory'}>
                <div className="md:flex justify-center gap-16">
                    {stories.slice(0, 3).map((Story) => (

                        <div key={Story._id} className="continer m-20  ">
                            <img src={Story.image} alt="img" className="" />
                            <h2 className="font-extrabold text-xl">{Story.Title}</h2>
                            <p className="text-gray-400">{Story.createdAt}</p>

                        </div>

                    ))}
                </div>
            </Link>
        </div>
    )
}
