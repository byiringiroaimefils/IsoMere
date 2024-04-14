import { FC, useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import { FaEye } from "react-icons/fa6";



import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Load from "../Loading";


interface Story {
  _id: string,
  Title: string,
  Author: string,
  createdAt: string,
  index: number

}





const Story: FC = () => {
  const [Loading, setLoading] = useState(true);
  const [story, setStory] = useState<Story[]>([]);

  useEffect(() => {
    axios.get("https://babystory-server.onrender.com/Stories")
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
    <>
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
            <div className='flex justify-end  mb-3 gap-48 mt-10 mr-20'>
              <input type="text" className='border outline-none h-7 w-60 rounded-md md:h20 translate-y-1 pl-2 hidden md:flex' placeholder='Search' />
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
                  </TableHead> <br />
                  <TableBody className="p-1">
                    {story.map(({ _id, index, Title, createdAt }) => (
                      <TableRow key={_id} className=" pb-1 cursor-pointer">
                        <TableCell className=" font-medium text-gray-600 ">{index + 1}</TableCell>
                        <TableCell className=" font-medium text-gray-600 ">{Title}</TableCell>
                        <TableCell>Parent</TableCell>
                        <TableCell>{createdAt}</TableCell>
                        <div className="flex gap-2 cursor-pointer text-lg">
                          <MdDeleteForever className="hover:text-red-700"  />
                          <MdEditSquare />
                          <Link to={`ViewStory/${_id}`}>
                            <FaEye className="hover:text-sky-500" />
                          </Link>
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
    </>
  )
}


export default Story