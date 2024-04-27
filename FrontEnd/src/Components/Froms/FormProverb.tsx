// import React from 'react'
import { Button, Label, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import{toast}from"react-hot-toast"


function Component() {
    const navigate = useNavigate()
    const [Tofproverb, setTofproverb] = useState({});
    const [Proverb, setProverb] = useState({});

    const HandleFunction = (e) => {
        e.preventDefault();
        const Data = {
            Tofproverb,
            Proverb
        }

        axios.post(`http://localhost:8080/proverb`, Data)
            .then((respond) => {
                console.log(respond.data);
                navigate("/Setting")
                toast.success("Successful Proverbs Added")
            })
            .catch((error) => {
                console.log(error)
                toast.error("This didn't work")
            })
    }

    return (
        <div className='flex justify-center mt-8 '>
            <form className="flex p-5 max-w-md flex-col gap-4  border w-full bg-white">
                <h2 className='font-bold'>Upload Proverbs</h2>
                <div>
                    <div className="mb-2 ">
                        <Label htmlFor="title" value="Title" />
                        <input type="text" id="title" className='border md:w-96 w-[99%] outline-none p-2' placeholder="Title of Story" required onChange={(e) => { setTofproverb(e.target.value) }} />
                    </div>
                </div>
                <div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="Proverb" value="Your Proverb" />
                        </div>
                        <Textarea id="Proverb" placeholder="Leave a Proverb..." required rows={4} className='pl-2 pt-2 md:w-96 w-[99%]'  onChange={(e) => { setProverb(e.target.value) }} />
                    </div>
                </div>
                <div>
                </div>
                <Button color="blue" className= 'md:w-96 w-[99%]' onClick={HandleFunction}>Upload</Button>
            </form>
        </div>
    );
}

export default Component;
