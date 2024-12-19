// import axios from 'axios'
// import { useParams, Link } from "react-router-dom";
// import { useState, useEffect } from 'react'
// import NavBar from "../NavBar";
// import { FC } from "react"
// import Load from "../Service/Loading";



// interface Story {
//   _id: string,
//   Title: string,
//   image: string,
//   Decription: string
//   createdAt: string
// }

// const View: FC = () => {
//   const [story, setStory] = useState<Story>({} as Story);
//   const [Loading, setLoading] = useState(true);

//   const { id } = useParams();


//   useEffect(() => {
//     axios.get(`https://babystory-server.onrender.com/story/${id}`)
//       .then((data) => {
//         setStory(data.data);
//         setLoading(false)
//       })
//       .catch((error) => {
//         console.log('error', error)
//         setLoading(false)
//       })
//   }, [id]);

//   return (
//     <>
//       <NavBar />
//       <div className='mt-20 px-4 md:px-8 font-serif'>
//         <Link to='/Setting/Story'>
//           <button className='bg-blue-500 text-white px-4 py-2 rounded'>Back</button>
//         </Link>
//         <div>
//           {
//             Loading ? (
//               <div className='flex justify-center text-center mt-56'>
//                 <Load />
//               </div>
//             ) : (
//               <div>
//                 <div className='Container flex flex-col md:flex-row justify-around w-full'>
//                   <div className='flex-1'>
//                     <div key={story._id} className='story p-4 w-full max-w-md md:max-w-lg mx-auto'>
//                       <div className='Header'>
//                         <h2 className='font-bold text-lg md:text-xl'>{story.Title}</h2>
//                         <p className='text-sm font-thin text-gray-400'>BYIRINGIRO</p> <br />
//                         <img src={story.image} alt="" className='w-full h-auto rounded-lg' />
//                       </div>
//                       <div className='Description mt-4'>
//                         <p>{story.Decription}</p>
//                         <p className='text-sm font-thin text-gray-400'>{new Date(story.createdAt).toString()}</p> <br />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )
//           }
//         </div>
//       </div>
//     </>
//   )
// }
// export default View;
