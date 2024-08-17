import NavBar from "../NavBar";
import IG from "./Bh.jpeg"
import Footer from '../Footer'
import {Link} from 'react-router-dom';
// import TopStorys from "../Top/TopStoryComponent"

export default function TopStory() {
  return (
    <>
      <NavBar />
      <div className="container px-10 py-36 translate-y-[-2%] flex justify-center">
        <div className="w-full max-w-4xl flex justify-between gap-20">
          <div>
            <div className="w-[95%]">
              <h2 className="text-4xl font-bold">Lorem ipsum dolor sit amet.</h2>
              <p className="text-gray-300">by BYIRINGIRO</p><br />
              <img src={IG} alt="" className="" /><br /><br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla natus aperiam maiores, mollitia commodi pariatur nisi quas minus adipisci officiis, voluptatum ex eveniet, quos similique porro alias <br /><br />ipsa eum fugit sequi qui. Sit error vero reprehenderit voluptas. Non molestias, eligendi animi sapiente vel sint nisi accusamus tenetur architecto voluptatum! Sequi, accusantium incidunt architecto eum dolores, eius iure itaque deleniti quae possimus debitis ipsam fugiat voluptate at quis eaque repellat a velit laboriosam nemo, voluptatibus unde fuga. Iusto pariatur optio temporibus alias velit nemo ad molestiae est deserunt soluta odit possimus natus<br /><br /> enim tempore, aspernatur perferendis harum facilis iure assumenda vitae asperiores at reiciendis vel. Quae corrupti temporibus maxime consectetur labore iure distinctio placeat rerum? Autem sit dolor dolorum quis, nostrum in asperiores vero quia. Provident quis fugit beatae quae nesciunt magni quas architecto suscipit assumenda temporibus dignissimos molestiae officia reiciendis, at quo odit consequatur enim recusandae excepturi quidem voluptatum. Id quam nemo necessitatibus expedita numquam. In fugiat ducimus maxime sunt doloremque dolorem sed, alias repellat unde sit eius, error quod esse illo vel, debitis ex nihil quaerat officiis. Ullam qui quia eveniet dolor repudiandae molestiae, nam labore fuga rem inventore explicabo aliquid veritatis in nostrum exercitationem, earum esse? Repellat, eius?</p>
            </div>
            <p className="text-gray-400">June 2024</p>
          </div>

          {/* <div className="Video w-[60%] translate-x-36">
            <div className="translate-y-[-14%]">
              <TopStorys />
            </div>
          </div> */}
        </div>
      </div>
      <div className="bg-black h-1 ml-10 mr-10"></div>
      <Link to={'/TopStory'}>
        <div className="md:flex justify-center">
          <div className="continer m-20 ">
            <img src={IG} alt="img" className="" />
            <h2 className="font-extrabold text-xl">Baby loves Money, Money hate baby</h2>
            <p className="text-gray-400">June 2024</p>

          </div>
          <div className="continer m-20 ">
            <img src={IG} alt="img" className="" />
            <h2 className="font-extrabold text-xl">Baby loves Money, Money hate baby</h2>
            <p className="text-gray-400">June 2024</p>

          </div>
          <div className="continer m-20 ">
            <img src={IG} alt="img" className="" />
            <h2 className="font-extrabold text-xl">Baby loves Money, Money hate baby</h2>
            <p className="text-gray-400">June 2024</p>

          </div>
        </div>
      </Link>
      <div>
        <Footer />
      </div>
    </>
  );
}