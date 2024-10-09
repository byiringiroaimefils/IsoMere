import { FC, useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import { FaEye, FaMagnifyingGlass } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";

import { Link } from "react-router-dom";
import axios from 'axios'
import Load from "../Service/Loading";
// import MUIDataTable from "mui-datatables";



// const columns = [
//   {
//     name: "#",
//     label: "#",
//     options: {
//       filter: true,
//       sort: true,
//     }
//   },
//   {
//     name: "Name",
//     label: "Name",
//     options: {
//       filter: true,
//       sort: false,
//     }
//   },
//   {
//     name: "Title of Story",
//     label: "Title of Story",
//     options: {
//       filter: true,
//       sort: false,
//     }
//   },
//   {
//     name: "Author",
//     label: "Autho",
//     options: {
//       filter: true,
//       sort: false,
//     }
//   },
//   {
//     label: "Action",
//     options: {
//       filter: true,
//       sort: false,
//     }
//   },
// ];




interface Story {
  _id: string,
  Title: string,
  Author: string,
  createdAt: string,
  index: number,
  Search: string

}


const Story: FC = () => {
  const [Loading, setLoading] = useState<boolean>(true);
  const [story, setStory] = useState<Story[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [Search, setSearch] = useState<string>('');


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
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">Stories</h1>
        <Link to="/FormStory">
          <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center">
            <IoAddCircle className="mr-2" />
            <span>Add New</span>
          </button>
        </Link>
      </div>

      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
            placeholder="Search stories..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          />
          <FaMagnifyingGlass className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {Loading ? (
        <div className="flex justify-center items-center h-64">
          <Load />
        </div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {story.filter(story => {
                if (Search) {
                  return story.Title.toLowerCase().includes(Search.toLowerCase())
                } else {
                  return story
                }
              }).map(({ _id, Title, Author, createdAt }, index) => (
                <tr key={_id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{Title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">{Author}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                    {new Date(createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Link to={`/story/${_id}`} className="text-blue-600 hover:text-blue-900">
                        <FaEye className="w-5 h-5" />
                      </Link>
                      <Link to={`/editS/${_id}`} className="text-green-600 hover:text-green-900">
                        <MdEditSquare className="w-5 h-5" />
                      </Link>
                      <Link to={`/deleteStory/${_id}`} className="text-red-600 hover:text-red-900">
                        <MdDeleteForever className="w-5 h-5" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}


export default Story;