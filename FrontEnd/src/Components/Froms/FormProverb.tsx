// import React from 'react'
import { Button, Label, Textarea } from "flowbite-react";
import { useState } from "react";
import axios from "axios";

function Component() {
    const [Tofproverb, setTofproverb] = useState({});
    const [Proverb, setProverb] = useState({});

    const HandleFunction = () => {
        const Data = {
            Tofproverb,
            Proverb
        }
        axios.post(`http://localhost:8080/proverb`, Data)
            .then((respond) => {
                console.log(respond.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='flex justify-center mt-8 '>
            <form className="flex p-5 max-w-md flex-col gap-4  border w-full bg-white">
                <h2 className='font-bold'>Upload Proverbs</h2>
                <div>
                    <div className="mb-2 ">
                        <Label htmlFor="email2" value="Title" />
                        <input type="text" className='border w-96 outline-none p-2' placeholder="Title of Story" onChange={(e) => { setTofproverb(e.target.value) }} />
                    </div>
                </div>
                <div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="comment" value="Your Stroy" />
                        </div>
                        <Textarea id="comment" placeholder="Leave a Story..." required rows={4} className='pl-2 pt-2 w-96' onChange={(e) => { setProverb(e.target.value) }} />
                    </div>
                </div>
                <div>
                </div>
                <Button color="blue" className='w-96' onClick={HandleFunction}>Uplosd</Button>
            </form>
        </div>
    );
}

export default Component;
