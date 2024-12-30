import { FC, useEffect, useState } from "react"
// import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from 'axios'
import Load from "../Service/Loading";
import Swal from "sweetalert2";
import { useUser } from "@clerk/clerk-react";


interface Proverb {
  _id: string,
  TitleofProverb: string,
  Author: string,
  Proverb: string,
  createdAt: string,
}

const Pro: FC = () => {
const { user } = useUser(); // Add Clerk user
  const [loading, setLoading] = useState<boolean>(true);
  const [proverbs, setProverbs] = useState<Proverb[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const authorName = user?.fullName || user?.username || "Anonymous";
    axios.get("https://babystory-server.onrender.com/Proverbs")
      .then((response) => {
        const userproverb=response.data.filter((proverb:Proverb)=>
          proverb.Author === authorName
        )
        setProverbs(userproverb);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching proverbs:', error);
        setLoading(false);
      })
  }, []);

  const filteredProverbs = proverbs.filter(proverb => 
    search ? (
      proverb.TitleofProverb.toLowerCase().includes(search.toLowerCase()) ||
      proverb.Author.toLowerCase().includes(search.toLowerCase()) ||
      proverb.Proverb.toLowerCase().includes(search.toLowerCase())
    ) : true
  );

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://babystory-server.onrender.com/deleteProverb/${id}`)
          .then(() => {
            setProverbs(proverbs.filter(proverb => proverb._id !== id)); // Update state to remove deleted proverb
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          })
          .catch((error) => {
            console.error('Error deleting proverb:', error);
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">Proverbs</h1>
        <Link to="/FormProverb">
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
            placeholder="Search proverbs..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          />
          <FaMagnifyingGlass className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Load />
        </div>
      ) : (
        <>
          {/* Table view for medium and larger screens */}
          <div className="hidden md:block overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title of Proverb</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                  {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proverb</th> */}
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProverbs.map(({ _id, TitleofProverb, Author, createdAt }, index) => (
                  <tr key={_id}>
                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{TitleofProverb}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{Author}</td>
                    {/* <td className="px-6 py-4 whitespace-nowrap max-w-xs truncate">{Proverb}</td> */}
                    <td className="px-6 py-4 whitespace-nowrap">{new Date(createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button onClick={() => handleDelete(_id)} className="text-red-600 hover:text-red-900">
                          <MdDeleteForever className="text-xl" />
                        </button>
                        <Link to={`/editP/${_id}`} className="text-blue-600 hover:text-blue-900">
                          <MdEditSquare className="text-xl" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card view for mobile screens */}
          <div className="md:hidden space-y-4">
            {filteredProverbs.map(({ _id, TitleofProverb, Author,  createdAt }, index) => (
              <div key={_id} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-600">#{index + 1}</span>
                  <span className="text-sm text-gray-500">{new Date(createdAt).toLocaleDateString()}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{TitleofProverb}</h3>
                <p className="text-sm text-gray-600 mb-2">By: {Author}</p>
                {/* <p className="text-sm text-gray-700 mb-4 line-clamp-2">{Proverb}</p> */}
                <div className="flex justify-end space-x-3">
                  <button 
                    onClick={() => handleDelete(_id)} 
                    className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100"
                  >
                    <MdDeleteForever className="text-xl" />
                  </button>
                  <Link 
                    to={`/editP/${_id}`} 
                    className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100"
                  >
                    <MdEditSquare className="text-xl" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Pro;
