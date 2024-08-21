import { Link } from "react-router-dom";
import IG from "./Bh.jpeg"
import axios from 'axios'
import { useState, useEffect } from 'react'




interface Story {
    _id: string,
    Title: string,
    createdAt: string
}

export default function BottomStory() {

    const [story, setStory] = useState<Story>({} as Story);

    useEffect(() => {
        axios.get(`https://babystory-server.onrender.com/story/`)
            .then((data) => {
                setStory(data.data);
            })
            .catch((error) => {
                console.log('error', error)
            })
    }, []);


    return (
        <div>
            <h2 className="ml-20 mt-5 font-extrabold ">POPULAR STORIES</h2>
            <Link to={'/TopStory'}>
                <div className="md:flex justify-center">
                    <div className="continer m-20 ">
                        <img src={IG} alt="img" className="" />
                        <h2 className="font-extrabold text-xl">Baby loves Money, Money hate baby</h2>
                        <p className="text-gray-400">June 2024</p>

                    </div>
                    <div className="continer m-20 ">
                        <img src={IG} alt="img" className="" />
                        <h2 className="font-extrabold text-xl">Baby loves Money, Money hate baby</h2>
                        <p className="text-gray-400">June 2024</p>

                    </div>
                    <div className="continer m-20 ">
                        <img src={IG} alt="img" className="" />
                        <h2 className="font-extrabold text-xl">Baby loves Money, Money hate baby</h2>
                        <p className="text-gray-400">June 2024</p>

                    </div>
                </div>
            </Link>
        </div>
    )
}
