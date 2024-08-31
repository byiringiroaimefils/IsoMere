import NavBar from "./NavBar";
import Noah from "../assets/Noah.webp"
import Creation from "../assets/Creation.jpg"
import David from "../assets/David and Goliath.webp"
import Read from "../assets/Bh.jpeg"
import Footer from './Footer'
import TopStory from "./Top/TopStoryComponent"
import { Link } from 'react-router-dom';


export default function Preview() {
  return (
    <>
      <NavBar />
      <div className="container mt-10 px-10 py-36 translate-y-[-2%] flex justify-center">
        <div className="w-full max-w-5xl md:flex justify-between ">
          <Link to={'/StoryView'}>
            <div className="">
              <h2 className="text-4xl font-bold uppercase ">Noah and the Ark</h2>
              <p className="text-gray-300">by BYIRINGIRO</p><br />
              <img src={Noah} alt="" className="object-cover" /><br /><br />
              <h2 className="text-4xl font-bold uppercase">The 7 Days of Creation.</h2>
              <p>by BYIRINGIRO</p><br />
              <img src={Creation} alt="" className="object-cover" /><br /><br />
              <h2 className="text-4xl font-bold uppercase">David killed Goliath!</h2>
              <p className="text-gray-300">by BYIRINGIRO</p><br />
              <img src={David} alt="" className="object-cover" /><br /><br />
              <h2 className="text-4xl font-bold uppercase">Lorem ipsum dolor sit amet.</h2>
              <p className="text-gray-300">by BYIRINGIRO</p><br />
              <img src={Read} alt="" className="object-cover" /><br />
              <p className="text-gray-400">June 2024</p>
            </div>
          </Link>

          <div className=" md:w-[65%] md:translate-x-44">
            <div className="md:translate-y-[-19%] gap-20">
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