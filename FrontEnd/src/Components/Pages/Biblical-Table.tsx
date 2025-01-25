import { FC, useEffect, useState } from "react"
// import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from 'axios'
import Load from "../Service/Loading";
import Swal from "sweetalert2"; // Import Swal for alerts
import { useUser } from "@clerk/clerk-react";




interface Story {
  _id: string,
  Title: string,
  Author_Image: string,
  Author: string,
  createdAt: string,
  index: number,
  Search: string

}


const Biblical: FC = () => {
  const [Loading, setLoading] = useState<boolean>(true);
  const [story, setStory] = useState<Story[]>([]);
  // const [showForm, setShowForm] = useState<boolean>(false);
  const [Search, setSearch] = useState<string>('');
  const { user } = useUser(); // Add Clerk user


  useEffect(() => {
    const authorName = user?.fullName || user?.username || "Anonymous";

    axios.get("http://localhost:3001/selectBiblical")
      .then((response) => {
        // Filter biblical stories based on user role and author name
        const isAdmin = user?.publicMetadata?.User === 'Admin';;
        const userStories = isAdmin ? response.data : response.data.filter((story: Story) => story.Author === authorName);

        setStory(userStories);
        setLoading(false);

      })
      .catch((error) => {
        console.log('error', error)
        setLoading(false);
      })
  }, [user]); // Add user to dependency array

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
        axios.delete(`http://localhost:3001/deleteBStory/${id}`)
          .then(() => {
            setStory(prevStories => prevStories.filter(story => story._id !== id)); // Update state to remove deleted story
            Swal.fire({
              title: "Deleted!",
              text: "Your Image has been deleted.",
              icon: "success"
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">Biblical  Stories</h1>
        <Link to="/FormBiblical">
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
        <>
          {/* Table view for medium and larger screens */}
          <div className="hidden md:block overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author Profile</th>
                  {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Author</th> */}
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
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
                }).map(({ _id, Title, Author, Author_Image, createdAt }, index) => (
                  <tr key={_id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                      <img
                        src={Author_Image}
                        alt={`${Author}'s avatar`}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        {Author}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{Title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                      {new Date(createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <Link to={`/editB/${_id}`} className="text-green-600 hover:text-green-900">
                          <MdEditSquare className="w-5 h-5" />
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="text-red-600 hover:text-red-900">
                          <MdDeleteForever className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card view for mobile screens */}
          <div className="md:hidden space-y-4">
            {story.filter(story => {
              if (Search) {
                return story.Title.toLowerCase().includes(Search.toLowerCase())
              } else {
                return story
              }
            }).map(({ _id, Title, Author, Author_Image, createdAt }, index) => (
              <div key={_id} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold text-gray-600">#{index + 1}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(createdAt).toLocaleDateString('en-US', { 
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={Author_Image}
                    alt={`${Author}'s avatar`}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{Author}</p>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">{Title}</h3>
                <div className="flex justify-end space-x-3">
                  <Link
                    to={`/editB/${_id}`}
                    className="p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100"
                  >
                    <MdEditSquare className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => handleDelete(_id)}
                    className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100"
                  >
                    <MdDeleteForever className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}


export default Biblical;
