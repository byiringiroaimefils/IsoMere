import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import { useState, useEffect } from 'react'
import { FC } from "react"
import axios from 'axios'

interface Story {
    id: string,
    TitleofProverb: string,
    Proverb: string,
}

const Component: FC = () => {
    const [story, setStory] = useState<Story[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/Proverbs")
            .then((response) => {
                setStory(response.data);
            })
            .catch((error) => {
                console.log('error', error)
            })
    }, [])
    console.log(story)

    return (
        <div className="p-10 w-full">
            <Table hoverable>
                <TableHead className="text-left gap-20">
                    <TableHeadCell>NO</TableHeadCell>
                    <TableHeadCell>Title of Proverb</TableHeadCell>
                    <TableHeadCell>Proverb</TableHeadCell>
                    <TableHeadCell>ACTION</TableHeadCell>
                </TableHead>
                <TableBody className="">
                    {story.map(({ id, TitleofProverb, Proverb }) => (
                        <TableRow key={id} className="hover:bg-gray-500/5 pb-2 cursor-pointer">
                            <TableCell className="font-medium text-gray-600">{id}</TableCell>
                            <TableCell className="font-medium text-gray-600">{TitleofProverb}</TableCell>
                            <TableCell>{Proverb}</TableCell>
                            <TableCell>
                                <div className="flex gap-7 cursor-pointer text-lg">
                                    <MdDeleteForever />
                                    <MdEditSquare />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default Component;
