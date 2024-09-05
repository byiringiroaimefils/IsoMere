
import axios from "axios"
import { useNavigate, useParams,Link } from "react-router-dom"
// import { toast } from "react-hot-toast";
import Swal from "sweetalert2";




export default function DeleteBook() {
  const { id } = useParams()
  const navigate = useNavigate()
  navigate("/Setting/Story")
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    // icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
    axios.delete(`https://babystory-server.onrender.com/deleteStory/${id}`)
      navigate("/Setting/Story")
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  })

    .catch((error) => {
      console.log(error)
    })

  return (
    <div>
      <Link to={'/Setting/Story'}>
      <button className="m-10 bg-sky-600 p-5 text-white">Back</button>
      </Link>
    </div>
  )
}
