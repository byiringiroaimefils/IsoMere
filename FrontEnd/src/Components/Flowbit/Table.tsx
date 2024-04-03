
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { MdDeleteForever,MdEditSquare } from "react-icons/md";

function component() {
    return (
        <div className="p-8">
            <Table hoverable>
                <TableHead className="text-left">
                    <TableHeadCell>NO</TableHeadCell>
                    <TableHeadCell>PRODUCT NAME</TableHeadCell>
                    <TableHeadCell>COLOR</TableHeadCell>
                    <TableHeadCell>CATEGORY</TableHeadCell>
                    <TableHeadCell>PRICE</TableHeadCell>
                    <TableHeadCell>
                        ACTION
                    </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    <TableRow className=" ">
                        <TableCell className=" font-medium text-gray-600 ">
                            01
                        </TableCell>
                        <TableCell className=" font-medium text-gray-600 ">
                            {'Apple MacBook Pro 17"'}
                        </TableCell>
                        <TableCell>Sliver</TableCell>
                        <TableCell>Laptop</TableCell>
                        <TableCell>$2999</TableCell>
                        <TableCell>

                            <div className="flex gap-7 cursor-pointer">
                                <MdDeleteForever />
                                <MdEditSquare />
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow className=" ">
                        <TableCell className=" font-medium text-gray-600 ">
                            02
                        </TableCell>
                        <TableCell className=" font-medium text-gray-600 ">
                            Microsoft Surface Pro
                        </TableCell>
                        <TableCell>White</TableCell>
                        <TableCell>Laptop PC</TableCell>
                        <TableCell>$1999</TableCell>
                        <TableCell>

                            <div className="flex gap-7 cursor-pointer">
                                <MdDeleteForever />
                                <MdEditSquare />
                            </div>

                        </TableCell>
                    </TableRow>
                    <TableRow className=" ">
                        <TableCell className=" font-medium text-gray-600 ">03</TableCell>
                        <TableCell className=" font-medium text-gray-600 ">Magic Mouse 2</TableCell>
                        <TableCell>Black</TableCell>
                        <TableCell>Accessories</TableCell>
                        <TableCell>$99</TableCell>
                        <TableCell>
                            <div className="flex gap-7 cursor-pointer">
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