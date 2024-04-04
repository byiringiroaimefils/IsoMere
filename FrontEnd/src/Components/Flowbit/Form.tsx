import React from 'react'
import { Button, Label, TextInput, FileInput, Select, Textarea } from "flowbite-react";

function Component() {
    return (
        <form className="flex justify-center m-5 p-5 max-w-md flex-col gap-4 border ">
            <h2>Upload Story</h2>
            <div>
                <div className="mb-2 ">
                    <Label htmlFor="email2" value="Title" />
                </div>
                <TextInput id="email2"   type="email" placeholder="Title of Story " required shadow />
            </div>
            <div>
                <div id="fileUpload" className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="file" value="Upload file" />
                    </div>
                    <FileInput id="file" />
                </div>
            </div>
            <div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="countries" value="Who Author For Story" />
                    </div>
                    <Select id="countries" required>
                        <option>United States</option>
                        <option>Canada</option>
                    </Select>
                </div>
            </div>
            <div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Your Stroy" />
                    </div>
                    <Textarea id="comment" placeholder="Leave a Story..." required rows={4} />
                </div>
            </div>
            <div>
            </div>
            <Button color="blue">Uplosde</Button>
        </form>
    );
}

export default Component;
