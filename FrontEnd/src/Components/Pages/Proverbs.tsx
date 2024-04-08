import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import { useState, useEffect } from 'react'
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { FC } from "react"
import axios from 'axios'
import Load from "../Loading";



interface Story {
  id: string,
  TitleofProverb: string,
  Proverb: string,
  index: string
}




const Pro: FC = () => {
  const [Loading, setLoading] = useState(true);
  const [story, setStory] = useState<Story[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/Proverbs")
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
    <div>
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
            <div className='flex justify-end  mb-3 md:gap-56 sm:gap-20 mt-10 mr-20'>
              <input type="text" className='border outline-none h-7 w-60 rounded-md md:h20 translate-y-1 pl-2 ' placeholder='Search' />
              <Link to="/FormProverb">
                <Button color="blue">Upload</Button>
              </Link>
            </div>
            <hr />
            <div>
              <div className="p-10 w-full ">
                <Table hoverable>
                  <TableHead className="text-left gap-20">
                    <TableHeadCell>NO</TableHeadCell>
                    <TableHeadCell>TITLE OF PROVERBS</TableHeadCell>
                    <TableHeadCell>ACTION</TableHeadCell>
                  </TableHead>
                  <TableBody className="">
                    {story.map(({ id, TitleofProverb, }) => (
                      <TableRow key={id} className="hover:bg-gray-500/5 pb-2 cursor-pointer">
                        <TableCell className="font-medium text-gray-600">01</TableCell>
                        <TableCell className="font-medium text-gray-600">{TitleofProverb}</TableCell>
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
            </div>
          </div>
        )
      }
    </div>


  )
}

export default Pro
