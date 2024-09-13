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
        <div>
            <h2 className="ml-20 mt-5 font-extrabold ">POPULAR STORIES</h2>
            <div className="md:flex justify-center ">
                {stories.slice(0, 3).map((Story) => (
                    <Link to={`/TopStory/${Story._id}`}>
                        <div key={Story._id} className="continer m-20  ">
                            <img src={Story.image} alt="img" className="w-80 h-70" />
                            <h2 className="font-extrabold text-xl uppercase text-center ">{Story.Title}</h2>
                            <p className="text-gray-400 text-center">{new Date(Story.createdAt).toString().replace(/\sGMT.*$/, '')}</p>

                        </div>

                    </Link>
                ))}
            </div>
        </div>
    )
}
