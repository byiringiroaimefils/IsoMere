import React from 'react'
import { Button, Label,Textarea } from "flowbite-react";

function Component() {
    return ( 
        <div className='flex justify-center mt-8'>
            <form className="flex p-5 max-w-md flex-col gap-4 border w-full">
                <h2 className='font-bold'>Upload Proverbs</h2>
                <div>
                    <div className="mb-2 ">
                        <Label htmlFor="email2" value="Title" />
                    </div>
                    {/* <TextInput id="email2" type="email" placeholder="Title of Story " required shadow className='pl-2 pt-2'  /> */}
                    <input type="text" className='border w-96 outline-none p-2' placeholder="Title of Story"/>
                </div>
                <div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="comment" value="Your Stroy" />
                        </div>
                        <Textarea id="comment" placeholder="Leave a Story..." required rows={4} className='pl-2 pt-2 w-96'/>
                    </div>
                </div>
                <div>
                </div>
                <Button color="blue" className='w-96'>Uplosde</Button>
            </form>
        </div>
    );
}

export default Component;
