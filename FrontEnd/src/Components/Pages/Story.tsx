import { FC, useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import { FaEye,FaMagnifyingGlass } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";



import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Load from "./Loading";
import FormStory from "../Froms/FormStory";



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
  const [showForm, setShowForm] = useState(false);


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
            <div className='flex justify-between px-6 py-6 items-center'>
              <div className=" ">
                <FaMagnifyingGlass className="absolute mt-6 ml-2"/>
                <input type="text" className='Input border outline-none h-7 md:w-[900px] -md:h20 mt-4 p-4 pl-8'  placeholder='Search' />
              </div>
              <div className="mr-4 translate-y-4">
                <Button color="blue"  className="border-none font-extrabold pr-2" onClick={() => setShowForm(!showForm)}> <span className=" mr-6 translate-y-0.5 translate-x-3"> <FaPlus /> </span> ADD NEW</Button>
              </div>
            </div>
            <div>
              <div className=" w-[1300px] static justify-center  items-center mt-10 ml-6  mr-6">
                <Table>
                  <TableHead className="Table text-left gap-20  pb-20  text-black font-extrabold ">
                    <TableHeadCell>#</TableHeadCell>
                    <TableHeadCell>TITLE OF STORY</TableHeadCell>
                    <TableHeadCell>AUTHOR</TableHeadCell>
                    <TableHeadCell>DATE</TableHeadCell>
                    <TableHeadCell>
                      ACTION
                    </TableHeadCell>
                  </TableHead> <br />

                  <TableBody className="p-1">
                    {story.map(({ _id,Title, createdAt },index) => (
                      <TableRow key={_id} className=" pb-1 cursor-pointer  divide-gray-200  even:bg-gray-200">
                        <TableCell className=" font-medium text-gray-600 ">{ index +1}</TableCell>
                        <TableCell className=" font-medium text-gray-600 ">{Title}</TableCell>
                        <TableCell>Parent</TableCell>
                        <TableCell>{new Date(createdAt).toString().replace(/\sGMT.*$/, '')}</TableCell>
                        <div className="flex gap-2 cursor-pointer text-lg translate-y-3 translate-x-5">
                          <Link to='/Delete'>
                            <MdDeleteForever className="hover:text-red-700" />
                          </Link>
                          <Link to='/Edit'>
                            <MdEditSquare />
                          </Link>
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
      },
      {
        showForm && (
          <div className=" fixed inset-0  bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center ">
            <FormStory />
          </div>
        )
      }
    </>
  )
}


export default Story