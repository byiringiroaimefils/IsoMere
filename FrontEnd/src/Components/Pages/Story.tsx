import { FC, useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";



import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Load from "../Loading";


interface Story {
  id: string,
  Title: string,
  Author: string,
  createdAt: string

}





const Story: FC = () => {
  const [Loading, setLoading] = useState(true);
  const [story, setStory] = useState<Story[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/Stories")
      .then((response) => {
        setStory(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('error', error)
        setLoading(false);
      })
  }, [])
  console.log(story)

  return (
    <div>
      {
        Loading ? (
          <div className='flex justify-center text-center mt-56'>
            <Load />
          </div>
        ) : (

          <div className='w-full'>
            <div className='ml-6 mt-4'>
              <h2 className='text-xl font-bold'>Upload Story</h2>
              <p className='text-sm font-thin text-gray-400'>Lorem ipsum dolor sit amet consectetur.</p>

            </div>
            <div className='flex justify-end  mb-3 md:gap-56 sm:gap-20 mt-10 mr-20'>
              <input type="text" className='border outline-none h-7 w-60 rounded-md md:h20 translate-y-1 pl-2 ' placeholder='Search' />
              <Link to="/FormStory">
                <Button color="blue">Upload</Button>
              </Link>
            </div>
            <hr />
            <div>
              <div className="p-10 w-full">
                <Table>
                  <TableHead className="text-left gap-20">
                    <TableHeadCell>NO</TableHeadCell>
                    <TableHeadCell>Title Of Story</TableHeadCell>
                    <TableHeadCell>Author</TableHeadCell>
                    <TableHeadCell>CreatedAt</TableHeadCell>
                    <TableHeadCell>
                      ACTION
                    </TableHeadCell>
                  </TableHead>
                  <TableBody className="">
                    {story.map(({ id, Title, Author, createdAt }) => (
                      <TableRow key={id} className="hover:bg-gray-500/5 pb-2 cursor-pointer">
                        <TableCell className=" font-medium text-gray-600 ">01</TableCell>
                        <TableCell className=" font-medium text-gray-600 ">{Title}</TableCell>
                        <TableCell>Parent</TableCell>
                        <TableCell>{createdAt}</TableCell>
                        <div className="flex gap-7 cursor-pointer text-lg">
                          <MdDeleteForever />
                          <MdEditSquare />
                        </div>
                      </TableRow>
                    ))}

                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        )
      }
    </div >
  )
}


export default Story