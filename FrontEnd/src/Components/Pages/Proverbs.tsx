import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import { useState, useEffect } from 'react'
import { Button } from "flowbite-react";
import { Link, } from "react-router-dom";
import { FC } from "react"
import axios from 'axios'
import Load from "./Loading";
import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import FormProverb from "../Froms/FormProverb";




interface Story {
  _id: string,
  TitleofProverb: string,
  Proverb: string,
  createdAt: string,
}




const Pro: FC = () => {
  const [Loading, setLoading] = useState(true);
  const [story, setStory] = useState<Story[]>([]);
  const [showForm, setShowForm] = useState(false);


  useEffect(() => {
    axios.get("https://babystory-server.onrender.com/Proverbs")
      .then((response) => {
        setStory(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('error', error)
        setLoading(false);
      })
  }, [])


  return (
    <>
      {
        Loading ? (
          <div className='flex justify-center text-center mt-56'>
            <Load />
          </div>
        ) : (
          <div>
            <div className='ml-6 mt-4'>
              <h2 className='text-xl font-bold'>Upload Proverbs</h2>
              <p className='text-sm font-thin text-gray-400'>Lorem ipsum dolor sit amet consectetur.</p>

            </div>
            <div className='flex justify-between px-6 py-6items-center'>
              <div className=" ">
              <FaMagnifyingGlass className="absolute mt-6 ml-2"/>
                <input type="text" className='Input border outline-none h-7 md:w-[900px]  md:h20 mt-4 p-4 pl-8' placeholder='Search' />
              </div>
              <div className="mr-4 translate-y-4">
                {/* <Link to="/FormProverb"> */}
                <Button color="blue" className="border-none font-extrabold pr-2" onClick={() => setShowForm(!showForm)}> <span className=" mr-6 translate-y-0.5 translate-x-3"> <FaPlus /> </span> ADD NEW</Button>
                {/* </Link> */}
              </div>
            </div>
            {/* <hr /> */}
            <div>
              {/* <div className="w-full mt-10 p-4"> */}
              <div className=" w-[1300px] static justify-center  items-center mt-10 ml-6  mr-6">
                <Table >
                  <TableHead className=" Table text-left gap-20  text-black font-extrabold">
                    <TableHeadCell>#</TableHeadCell>
                    <TableHeadCell>TITLE OF PROVERBS</TableHeadCell>
                    <TableHeadCell>DATE</TableHeadCell>
                    <TableHeadCell>ACTION</TableHeadCell>
                  </TableHead> <br />
                  <TableBody className="p-1">
                    {story.map(({ _id, TitleofProverb, createdAt },index) => (
                      <TableRow key={_id} className="  cursor-pointer divide-gray-200  even:bg-gray-200">
                        <TableCell className="font-medium text-gray-600">{index+1}</TableCell>
                        <TableCell className="font-medium text-gray-600">{TitleofProverb}</TableCell>
                        <TableCell className="font-medium text-gray-600">{new Date(createdAt).toString().replace(/\sGMT.*$/, '')}</TableCell>

                        <TableCell>
                          <div className="flex gap-3 cursor-pointer text-lg translate-y-1 translate-x-[-6px] ">
                            <Link to='/Delete'>
                              <MdDeleteForever className="hover:text-red-700" />
                            </Link>
                            <Link to='/Edit'>
                              <MdEditSquare />
                            </Link>
                            <Link to={`/ViewProverb/${_id}`}>
                              <FaEye className="hover:text-sky-600" />
                            </Link>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        )
      }
      {
        showForm && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50  flex justify-center items-center">
            <FormProverb />
          </div>
        )
      }
    </>
  )
}

export default Pro;
