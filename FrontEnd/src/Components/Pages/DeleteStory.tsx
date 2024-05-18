// Dependencies could be used.
import axios from "axios"
import { useNavigate, useParams, } from "react-router-dom"
// import { toast } from "react-hot-toast";
import  Swal from "sweetalert2";




export default function DeleteBook() {
  
  const { id } = useParams()
  const navigate = useNavigate()  
    axios.delete(`http://localhost:8080/deleteStory/${id}`)
    .then(() => {
        navigate("/Setting/Story")
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/Setting")
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });

      })
      .catch((error) => {
        console.log(error)
        // toast.error("This didn't work")

      })

  return (
    <div>
      {/* <div className="m-5">
        <button className="flex rounded  bg-sky-600 p-3" >
          <Link to='/Setting/Story'>
            Back
          </Link>
        </button>
      </div>
      <div className="flex justify-center items-center h-80 flex-col">
        
      </div> */}
    </div>

  )
}
