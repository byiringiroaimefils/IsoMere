import NavBar from "./NavBar";
import IG from "../assets/Bh.jpeg"
import Footer from './Footer'
import TopStory from "./Top/TopStoryComponent"
import { Link } from 'react-router-dom';


export default function Preview() {
  return (
    <>
      <NavBar />
      <div className="container px-10 py-36 translate-y-[-2%] flex justify-center">

        <div className="w-full max-w-4xl flex justify-between ">
          <Link to={'/StoryView'}>
            <div className="">
              <h2 className="text-4xl font-bold">Lorem ipsum dolor sit amet.</h2>
              <p className="text-gray-300">by BYIRINGIRO</p><br />
              <img src={IG} alt="" className="w-full" /><br /><br />
              <h2 className="text-4xl font-bold">Lorem ipsum dolor sit amet.</h2>
              <p>by BYIRINGIRO</p><br />
              <img src={IG} alt="" className="w-full" /><br /><br />
              <h2 className="text-4xl font-bold">Lorem ipsum dolor sit amet.</h2>
              <p className="text-gray-300">by BYIRINGIRO</p><br />
              <img src={IG} alt="" className="w-full" /><br /><br />
              <h2 className="text-4xl font-bold">Lorem ipsum dolor sit amet.</h2>
              <p className="text-gray-300">by BYIRINGIRO</p><br />
              <img src={IG} alt="" className="w-full" /><br />
              <p className="text-gray-400">June 2024</p>
            </div>
          </Link>

          <div className="Video w-[70%] translate-x-52">
            <div className="translate-y-[-14%] gap-20">
              <TopStory />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}