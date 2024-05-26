
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
function Component() {
    const navigate = useNavigate()
    const [TofStory, setTofStory] = useState('');
    const [Image, setImage] = useState();
    const [Author, setAuthor] = useState('');
    const [Decription, setDecription] = useState('');

    const HandleFunction = (e: React.FormEvent<HTMLFormElement>, Decription: string) => {
        e.preventDefault();
        console.log(htmlreactparser(Decription))
        const Data = {
            TofStory,
            Author,
            Description: htmlreactparser(Decription)
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

        const formData = new FormData();
        if (Image) {
            formData.append("file", Image);
        }
        axios.post(`http://localhost:8080/upload`, formData)
            .then((respond) => {
                console.log(respond.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }



    return (
        <div className='flex justify-center mt-14'>
            <form action="" method="POST" encType="multipart/form-data" className={`flex p-5 bg-white max-w-md flex-col gap-4  w-ful `} >
                <div className='Logo font-black flex align-middle translate-x-[-25px]'>
                    <img src='BabyStoryLogo.png' alt="" className='w-16 translate-y-[-5px] translate-x-3' />
                    <Link to="#"> <h2>Baby<span className='text-blue-500 font-semibold text-base '>Story</span></h2></Link>
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
                                type='file'
                                className='md:w-[99%] w-[99%] border p-2'
                                placeholder='Link of your Image'
                                onChange={(e) => {
                                    if (e.target.files) {
                                        setImage(e.target.files[0]);
                                    }
                                }}
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
                        <div>
                            <CKEditor
                                editor={ClassicEditor}
                                data={Decription}
                                onChange={(event, editor) => {
                                    setDecription(editor.getData());
                                }} />
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <Button color="blue" className='md:w-[99%] w-[99%]' onClick={HandleFunction}>Upload</Button>
            </form>
        </div>
    );
}

export default Component;

