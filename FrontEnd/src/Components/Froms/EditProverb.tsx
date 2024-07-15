// import React from 'react'
import { Button, Label } from "flowbite-react";
import { useParams ,Link} from "react-router-dom"
import { useState, useEffect } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";
import { toast } from "react-hot-toast"


function Component() {
    const [Tofproverb, setTofproverb] = useState('');
    const [Proverb, setProverb] = useState('');
    const { id } = useParams();
    useEffect(() => {

        axios.get(`hhttps://babystory-server.onrender.com/proverb/${id}`)
            .then((respond) => {
                setTofproverb(respond.data.TitleofProverb)
                setProverb(respond.data.Proverb)
                console.log(respond.data);
            })
            .catch((error) => {
                console.log(error)

            })

    })

    const HandleFunction = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const Data = {
            Tofproverb,
            Proverb
        }

        axios.put(`https://babystory-server.onrender.com/EditProverb/${id}`, Data)
            .then((respond) => {
                console.log(respond.data);
                toast.success("Successful Proverbs updated")
            })
            .catch((error) => {
                console.log(error)
                toast.error("This didn't work")
            })
    }

    return (
        <div className='flex justify-center mt-8 '>
            <form className="flex p-5 max-w-md flex-col gap-4 w-full bg-white" onSubmit={HandleFunction}>
                <div className='Logo font-black flex align-middle translate-x-[-25px]'>
                    <img src='BabyStoryLogo.png' alt="" className='w-16 translate-y-[-5px] translate-x-3' />
                    <Link to="#"> <h2>Baby<span className='text-blue-500 font-semibold text-base '>Story</span></h2></Link>
                </div>
                <h2 className='font-bold'>Upload Proverbs</h2>
                <div>
                    <div className="mb-2 ">
                        <Label htmlFor="title" value="Title" />
                        <input type="text" id="title" className='border md:w-96 w-[99%] outline-none p-2' placeholder="Title of Story" required value={Tofproverb} onChange={(e) => { setTofproverb(e.target.value) }} />
                    </div>
                </div>
                <div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="Proverb" value="Your Proverb" />
                        </div>
                        <div>
                            <CKEditor
                                editor={ClassicEditor}
                                data={Proverb}
                                onChange={(_event, editor) => {
                                    setProverb(editor.getData());
                                }} />
                        </div>

                    </div>
                </div>
                <div>
                </div>
                <Button color="blue" className='md:w-96 w-[99%]' type="submit">Upload</Button>
            </form>
        </div>
    );
}

export default Component;
