import React from 'react'
import { Button, Label, FileInput, Select, Textarea } from "flowbite-react";

function Component() {
    return ( 
        <div className='flex justify-center mt-14'>
            <form className="flex p-5 max-w-md flex-col gap-4 border w-full">
                <h2 className='font-bold'>Upload Story</h2>
                <div>
                    <div className="mb-2 ">
                        <Label htmlFor="email2" value="Title" />
                    </div>
                    {/* <TextInput id="email2" type="email" placeholder="Title of Story " required shadow /> */}
                    <input type="text" className='border w-96 outline-none p-2 rounded-sm' placeholder="Title of Story"/>

                </div>
                <div>
                    <div id="fileUpload" className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="file" value="Upload file" />
                        </div>
                        <FileInput id="file" className=' w-96'/>
                    </div>
                </div>
                <div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="Who Author For Story" />
                        </div>
                        <Select id="countries" required className=' w-96'>
                            <option>Parents</option>
                            <option>Others</option>
                        </Select>
                    </div>
                </div>
                <div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="comment" value="Your Stroy" />
                        </div>
                        <Textarea id="comment" placeholder="Leave a Story..." required rows={4} className='pl-2 pt-2 w-96' />
                    </div>
                </div>
                <div>
                </div>
                <Button color="blue">Uplosde</Button>
            </form>
        </div>
    );
}

export default Component;
