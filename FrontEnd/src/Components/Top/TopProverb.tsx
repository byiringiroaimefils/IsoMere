import NavBar from "../NavBar";
// import IG from "./Bh.jpeg"
import Footer from '../Footer'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import BottomStory from "./BottomStory"



interface Proverb {
  _id: string,
  Title: string,
  Decription: string
  createdAt: string
}

export default function TopProverb() {

  const [Proverb, setProverb] = useState<Proverb>({} as Proverb);
  const { id } = useParams();



  useEffect(() => {
    axios.get(`https://babystory-server.onrender.com/story/${id}`)
      .then((data) => {
        setProverb(data.data);
      })
      .catch((error) => {
        console.log('error', error)
      })
  }, [id]);




  return (
    <>
      <NavBar />
      <div className="container px-10 py-36 translate-y-[-2%] md:ml-20">
        <div className="w-full max-w-4xl flex justify-between gap-20">
          <div>
            <h2 className="text-4xl font-bold">Lorem ipsum dolor sit amet.</h2>
            <p className="text-gray-300">by BYIRINGIRO</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla natus aperiam maiores, mollitia commodi pariatur nisi quas minus adipisci officiis, voluptatum ex eveniet, quos similique porro alias <br />ipsa eum fugit sequi qui. Sit error vero reprehenderit voluptas. Non molestias, eligendi animi sapiente vel sint nisi accusamus tenetur architecto voluptatum! Sequi, accusantium incidunt architecto eum dolores, eius iure itaque deleniti quae possimus <br />debitis ipsam fugiat voluptate at quis eaque repellat a velit laboriosam nemo, voluptatibus unde fuga. Iusto pariatur optio temporibus alias velit nemo ad molestiae est deserunt soluta odit possimus natus, enim tempore, aspernatur perferendis harum facilis iure assumenda vitae asperiores at reiciendis vel. Quae corrupti temporibus maxime consectetur labore iure distinctio placeat rerum? Autem sit dolor dolorum quis, nostrum in asperiores vero quia. Provident quis fugit beatae quae nesciunt magni quas architecto suscipit assumenda temporibus dignissimos molestiae officia reiciendis, at quo odit consequatur enim recusandae excepturi quidem voluptatum. Id quam nemo necessitatibus expedita numquam. In fugiat ducimus maxime sunt doloremque dolorem sed, alias repellat unde sit eius, error quod esse illo vel, debitis ex nihil quaerat officiis. Ullam qui quia eveniet dolor repudiandae molestiae, nam labore fuga rem inventore explicabo aliquid veritatis in nostrum exercitationem, earum esse? Repellat, eius?</p>
            <p className="text-gray-300">june2024</p>
          </div>
        </div> <br />
        <div className="flex  gap-[55%]">
          <button className='border p-3 font-bold rounded-full  text-gray-500 hover:bg-black transition-all duration-500 ease-in'>Prev</button>
          <button className='border p-3 font-bold rounded-full  text-gray-500 hover:bg-black transition-all duration-500 ease-in'>Next</button>
        </div>
      </div>
      <div className="bg-black/50 rounded h-1 ml-10 mr-10"></div>
      <BottomStory />
      <div>
        <Footer />
      </div>
    </>
  );
}