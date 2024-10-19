import { FC, useEffect, useState } from "react"
// import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import { FaEye, FaMagnifyingGlass } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from 'axios'
import Load from "../Service/Loading";
import Swal from "sweetalert2";

interface Proverb {
  _id: string,
  TitleofProverb: string,
  Proverb: string,
  createdAt: string,
}

const Pro: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [proverbs, setProverbs] = useState<Proverb[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    axios.get("https://babystory-server.onrender.com/Proverbs")
      .then((response) => {
        setProverbs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching proverbs:', error);
        setLoading(false);
      })
  }, []);

  const filteredProverbs = proverbs.filter(proverb => 
    search ? proverb.TitleofProverb.toLowerCase().includes(search.toLowerCase()) : true
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
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title of Proverb</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProverbs.map(({ _id, TitleofProverb, createdAt }, index) => (
                <tr key={_id}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{TitleofProverb}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{new Date(createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button onClick={() => handleDelete(_id)} className="text-red-600 hover:text-red-900">
                        <MdDeleteForever className="text-xl" />
                      </button>
                      <Link to={`/editProverb/${_id}`} className="text-blue-600 hover:text-blue-900">
                        <MdEditSquare className="text-xl" />
                      </Link>
                      <Link to={`/proverb/${_id}`} className="text-green-600 hover:text-green-900">
                        <FaEye className="text-xl" />
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

export default Pro;
