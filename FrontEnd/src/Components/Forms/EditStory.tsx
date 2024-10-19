import { useNavigate, useParams ,Link} from "react-router-dom"
import { Button, Label } from "flowbite-react";
import { useState, useEffect } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { toast } from "react-hot-toast"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";




function Component() {
    const navigate = useNavigate()
    const [TofStory, setTofStory] = useState<string>('');
    const [Image, setImage] = useState<string>('');
    const [Author, setAuthor] = useState({});
    const [Decription, setDecription] = useState<string>('');
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://babystory-server.onrender.com/story/${id}`)
            .then((respond) => {
                setTofStory(respond.data.Title)
                setImage(respond.data.image)
                setAuthor(respond.data.Author)
                setDecription(respond.data.Decription) // Ensure this is set for CKEditor
                console.log(respond.data);
            })
            .catch((error) => {
                console.log(error)
                toast.error("This didn't work")
            })
    }, [id]) // Added dependency array to avoid infinite loop

    const HandleFunction = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const Data = {
            TofStory,
            Author,
            Image,
            Decription
        }
        axios.put(`https://babystory-server.onrender.com/EditProverb/${id}`, Data)
            .then((respond) => {
                console.log(respond.data);
                navigate("/Setting");
                toast.success("Successful Story Updated")
            })
            .catch((error) => {
                console.log(error)
                toast.error("This didn't work")
            })
    }






    return (
        <div className='flex justify-center mt-14 font-serif'>
            <form action="" onSubmit={HandleFunction} method="POST" encType="multipart/form-data" className={`flex p-5 bg-white max-w-md flex-col gap-4  w-ful`} >
                <div className='Logo font-black flex align-middle translate-x-[-25px]'>
                    <img src='BabyStoryLogo.png' alt="" className='w-16 translate-y-[-5px] translate-x-3' />
                    <Link to="#"> <h2></h2></Link>
                </div>
                <h2 className='font-bold'>Upload Story</h2>
                <div>
                    <div className="mb-2 ">
                        <Label htmlFor='title' value="Title" /><br />
                        <input type="text" id='title' className='border w-[95%] outline-none p-2 rounded-sm' placeholder="Title of Story" value={TofStory} onChange={(e) => setTofStory(e.target.value)} />
                    </div>

                </div>
                <div>
                    <div id="fileUpload" className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor='file-upload' value="Image" />
                            <input
                                type='text'
                                className='md:w-96 w-[99%] border p-2'
                                placeholder='Link of your Image'
                                value={Image}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setImage(e.target.value)}

                            />

                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="Author" value="Who Author For Story" />
                        </div>
                        <select id='Author' className='md:w-96 w-[99%] border p-2' onChange={(e) => setAuthor(e.target.value)}>
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
                                data={Decription} // Ensure CKEditor is initialized with existing description
                                onChange={(_event, editor) => {
                                    setDecription(editor.getData());
                                }} />
                        </div>
                    </div>
                </div>
                <div>
                </div>

                <Button  className='md:w-[99%] w-[99%]  bg-blue-500 rounded-full hover:bg-blue-700 transition-all duration-500 ease-in text-white' type="submit">Upload</Button>
            </form>
        </div>
    );
}

export default Component;
