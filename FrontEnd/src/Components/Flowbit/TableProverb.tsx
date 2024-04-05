
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
// import { useState, useEffect } from 'react'
// import { FC } from "react"



function component(){
    // const [Story, setStory] = useState([]);
    // const [Loading, setLoading] = useState(true);

    // useEffect(() => {
    //     axios.get("")
    //         .then((data) => {
    //             setStory(data.data);
    //             setLoading(false)
    //         })
    //         .catch((error) => {
    //             console.log('error', error)
    //             setLoading(false)
    //         })
    // }, []

    // )

    return (
        <div className="p-10 w-full">
            <Table hoverable>
                <TableHead className="text-left gap-20">
                    <TableHeadCell>NO</TableHeadCell>
                    <TableHeadCell>Tilte of Proverb</TableHeadCell>
                    <TableHeadCell>Proverb</TableHeadCell>
                    <TableHeadCell>
                        ACTION
                    </TableHeadCell>
                </TableHead>
                <TableBody className="">
                    <TableRow className="hover:bg-gray-500/5 pb-2 cursor-pointer">
                        <TableCell className=" font-medium text-gray-600 ">
                            01
                        </TableCell>
                        <TableCell className=" font-medium text-gray-600 ">
                            {'Apple MacBook Pro 17"'}
                        </TableCell>
                        <TableCell>Sliver</TableCell>
                        <TableCell>
                            <div className="flex gap-7 cursor-pointer text-lg">
                                <MdDeleteForever />
                                <MdEditSquare />
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export default component