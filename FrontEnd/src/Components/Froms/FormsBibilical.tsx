
import React from 'react'
import { useNavigate } from "react-router-dom"
import { Button, Label } from "flowbite-react";
import { useState } from "react";
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import htmlreactparser from 'html-react-parser'
import { Link } from 'react-router-dom';
import { toast } from "react-hot-toast"



function FormBibilical() {
    const navigate = useNavigate()
    const [TofStory, setTofStory] = useState('');
    const [Image, setImage] = useState('');
    const [Author, setAuthor] = useState('');
    const [Decription, setDecription] = useState('');

    const HandleFunction = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(htmlreactparser(Decription))
        const Data = {
            TofStory,
            Author,
            Image,
            Decription
        }
        axios.post(`https://babystory-server.onrender.com/story`, Data)
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
            <form action="" onSubmit={HandleFunction} method="POST" className={`flex p-5 bg-white max-w-md flex-col gap-4  w-ful `} >
                <div className='Logo font-black flex align-middle translate-x-[-25px]'>
                    <img src='BabyStoryLogo.png' alt="" className='w-16 translate-y-[-5px] translate-x-3' />
                    <Link to="#"> <h2></h2></Link>
                </div>
                <h2 className='font-bold'>Upload Story</h2>
                <div>
                    <div className="mb-2 ">
                        <Label htmlFor='title' value="Title" /><br />
                        <input type="text" id='title' className='border w-[99%] outline-none p-2 rounded-sm' placeholder="Title of Story" onChange={(e) => setTofStory(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div id="fileUpload" className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor='file-upload' value="Image" />
                            <input
                                type='text'
                                className='md:w-[99%] w-[99%] border p-2'
                                placeholder='Link of your Image'
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImage(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="Author" value="Who Author For Story" />
                        </div>
                        <select id='Author' className='md:w-[99%] w-[99%] border p-2' onChange={(e) => setAuthor(e.target.value)}>
                            <option value='Parents' >Select</option>
                            <option value='Author ( aimefils173@gmail.com )'>Author ( aimefils173@gmail.com )</option>
                            <option value='Others'>Others</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="comment" value="Your Story" />
                        </div>
                        <div>
                            <CKEditor
                                editor={ClassicEditor}
                                data={Decription}
                                onChange={(_event, editor) => {
                                    setDecription(editor.getData());
                                }} />
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <Button color="blue" className='md:w-[99%] w-[99%]' type='submit'>UPLOAD</Button>
            </form>
        </div>
    );
}

export default FormBibilical;

