// Dependencies could be used.
import axios from "axios"
import { useNavigate, useParams, Link } from "react-router-dom"
// import { toast } from "react-hot-toast";




export default function DeleteBook() {
  
  const { id } = useParams()
  const navigate = useNavigate()  
    axios.delete(`http://localhost:8080/deleteProverb/${id}`)
      .then(() => {
        navigate("/Setting")
        // toast.success("Successful Story Added")

      })
      .catch((error) => {
        console.log(error)
        // toast.error("This didn't work")

      })

  return (
    <div>
      <div className="m-5">
        <button className="flex rounded  bg-sky-600 p-3" >
          <Link to='/Setting/Proverb'>
            Back
          </Link>
        </button>
      </div>
      <div className="flex justify-center items-center h-80 flex-col">
        
      </div>
    </div>

  )
}
