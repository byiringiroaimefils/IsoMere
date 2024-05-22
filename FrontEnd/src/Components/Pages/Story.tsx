import { FC, useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import { FaEye, FaMagnifyingGlass } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";




import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Load from "./Loading";
// import FormStory from "../Froms/FormStory";



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
  const [Search, setSearch] = useState(false);


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
  }, []);

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
            <div className='flex justify-between px-6 py-6items-center gap-2'>
              <div className=" ">
                <FaMagnifyingGlass className=" hidden md:block absolute mt-6 ml-2" />
                <input type="text" className='Input border hidden md:block outline-none h-7 w-full  md:h20 mt-4 p-4 pl-8' placeholder='Search.....' onChange={(e) => setSearch(e.target.value)} />
              </div>
              <div className="mr-4 translate-y-4">
                <Link to={'/FormStory'}>
                <Button color="blue" className="border-none font-extrabold pr-2 md:h-[43px] translate-y-[-2px] gap-2 md:w-24" onClick={() => setShowForm(!showForm)}> <span className=" text-3xl translate-x-1"> <IoAddCircle /> </span></Button>
                </Link>
              </div>
            </div>
            <div>
              <div className="hidden md:block  static justify-center  items-center mt-10 ml-6  mr-6">
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

                  <TableBody className="p-1 ">
                    {story.filter(story => {
                      if (Search) {
                        return story.Title.toLowerCase().includes(Search.toLowerCase())
                      } else {
                        return story
                      }
                    }).map(({ _id, Title, Author, createdAt }, index) => (
                      <TableRow key={_id} className=" pb-1 cursor-pointer  divide-gray-200  even:bg-gray-200">
                        <TableCell className=" font-medium text-gray-600 ">{index + 1}</TableCell>
                        <TableCell className=" font-medium text-gray-600 ">{Title}</TableCell>
                        <TableCell>{Author}</TableCell>
                        <TableCell>{new Date(createdAt).toString().replace(/\sGMT.*$/, '')}</TableCell>
                        <div className="flex gap-2 cursor-pointer text-lg translate-y-3 translate-x-5">
                          <Link to={`/deleteStory/${_id}`} >
                            <MdDeleteForever className="hover:text-red-700" />
                          </Link>
                          <Link to='/EditStory'>
                            <MdEditSquare />
                          </Link>
                          <Link to={`/story/${_id}`}>
                            <FaEye className="hover:text-sky-500" />
                          </Link>
                        </div>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="md:hidden">
                <div className="flex justify-between items-center flex-col">
                  {story.map(({ _id, Title, Author, createdAt }, index) => (
                    <div key={_id} className="border  shadow-md bg-gray-200/20 p-4 rounded-sm w-[90%] m-10   ">
                      <div>
                        <h3 className="bg-[#2563eb] mb-2 rounded-full text-center w-6 text-white">{index + 1}</h3>
                        <h2 className="text-base font-bold">Title: {Title}</h2>
                        <h2 className="text-base font-bold">Athor: {Author}</h2>
                        <p>{new Date(createdAt).toString().replace(/\sGMT.*$/, '')}</p> <br />
                      </div>
                      <div className="display flex justify-between items-center">
                        <Link to={`/deleteStory/${_id}`}>
                          <MdDeleteForever className="hover:text-red-700 text-lg" />
                        </Link>
                        <Link to='/Edit'>
                          <MdEditSquare className="text-lg" />
                        </Link>
                        <Link to={`/story/${_id}`}>
                          <FaEye className="hover:text-sky-600 text-lg" />
                        </Link>
                      </div>
                    </div>

                  ))}
                </div>
              </div>
            </div>
          </div>


        )
      }
      {/* {
        showForm && (
          <div className=" fixed inset-0  bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center ">
            <FormStory />
          </div>
        )
      } */}
    </>
  )
}


export default Story