
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";

function component() {
    return (
        <div className="p-10 w-full">
            <Table hoverable>
                <TableHead className="text-left gap-20">
                    <TableHeadCell>NO</TableHeadCell>
                    <TableHeadCell>Title Of Story</TableHeadCell>
                    <TableHeadCell>Author</TableHeadCell>
                    <TableHeadCell>Image</TableHeadCell>
                    <TableHeadCell>Story</TableHeadCell>
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
                        <TableCell>Laptop</TableCell>
                        <TableCell>2999</TableCell>
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