// import { FC } from 'react'
// import { useParams,Link } from "react-router-dom";
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import NavBar from "../NavBar";
// import Load from "../Service/Loading";

// interface Proverb {
//   id: string,
//   TitleofProverb: string,
//   Proverb: string
// }


// const Proverb: FC = () => {
//   const [Proverb, setProverb] = useState({} as Proverb);
//   const [Loading, setLoading] = useState<boolean>(true);
//   const { id } = useParams();

//   useEffect(() => {
//     axios.get(`https://babystory-server.onrender.com/proverb/${id}`)
//       .then((data) => {
//         setProverb(data.data);
//         setLoading(false)
//       })
//       .catch((error) => {
//         console.log('error', error)
//         setLoading(false)
//       })
//   }, []);
//   return (
//     <>
//       <NavBar />
//       <div className='mt-20 px-4 md:px-8'> {/* Added padding for better spacing */}
//         <Link to='/Setting/Proverb'>
//           <button className='bg-blue-500 text-white px-4 py-2 rounded'>Back</button> {/* Styled button */}
//         </Link>
//         <div>
//           {
//             Loading ? (
//               <div className='flex justify-center text-center mt-56'>
//                 <Load />
//               </div>
//             ) : (
//               <div>
//                 <div key={Proverb.id} className='story p-4 w-full max-w-md md:max-w-lg mx-auto'> {/* Responsive container */}
//                   <div className='Header'>
//                     <h2 className='font-bold text-lg md:text-xl'>{Proverb.TitleofProverb}</h2> {/* Responsive text size */}
//                   </div>
//                   <div className='Description mt-4'>
//                     <p>{Proverb.Proverb}</p>
//                     <p className='text-sm font-thin text-gray-400'>20th, March 2024</p> <br />
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
// export default Proverb
