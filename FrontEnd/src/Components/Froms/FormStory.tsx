import React from 'react'
import { useNavigate } from "react-router-dom"
import { Button, Label, Textarea } from "flowbite-react";
import { useState } from "react";
import axios from "axios";

import{toast}from"react-hot-toast"
function Component() {
    const navigate = useNavigate()
    const [TofStory, setTofStory] = useState({});
    const [Image, setImage] = useState({});
    const [Author, setAuthor] = useState({});
    const [Decription, setDecription] = useState({});
    const [showForm, setShowForm] = useState(false);

    const HandleFunction = (e) => {
        e.preventDefault();
        const Data = {
            TofStory,
            Author,
            Image,
            Decription
        }
        axios.post(`http://localhost:8080/story`, Data)
            .then((respond) => {
                console.log(respond.data);
                navigate("/Setting");
                toast.success("Successful Story Added")
            })
            .catch((error) => {
                console.log(error)
                toast.error("This didn't work")
            })
    }



    return (
        <div className='flex justify-center mt-14'>
            <form className= {`flex p-5 bg-white max-w-md flex-col gap-4 border w-full ${showForm ? 'hidden' : 'flex'}`}>
                <span onClick={() => setShowForm(!showForm)}>Cross</span>
                <h2 className='font-bold'>Upload Story</h2>
                <div>
                    <div className="mb-2 ">
                        <Label htmlFor="email2" value="Title" />
                        <input type="text" className='border w-96 outline-none p-2 rounded-sm' placeholder="Title of Story" onChange={(e) => setTofStory(e.target.value)} />
                    </div>

                </div>
                <div>
                    <div id="fileUpload" className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="file" value="Upload file" />
                            <input type='text' className=' w-96 border p-2' placeholder='Link of your Image' onChange={(e) => setImage(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="Who Author For Story" />
                        </div>
                        <select className=' w-96 border p-2' onChange={(e) => setAuthor(e.target.value)}>
                            <option value='Parents'>Parents</option>
                            <option value='Others'>Others</option>
                        </select>

                    </div>
                </div>
                <div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="comment" value="Your Story" />
                        </div>
                        <Textarea id="comment" placeholder="Leave a Story..." required rows={4} className='pl-2 pt-2 w-96' onChange={(e) => setDecription(e.target.value)} />
                    </div>
                </div>
                <div>
                </div>

                <Button color="blue" className='w-96' onClick={HandleFunction}>Upload</Button>
            </form>
        </div>
    );
}

export default Component;
