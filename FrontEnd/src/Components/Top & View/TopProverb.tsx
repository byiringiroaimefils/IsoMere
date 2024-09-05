import NavBar from "../NavBar";
import Footer from '../Pages/Footer';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import BottomStory from "./BottomStory";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

interface Proverb {
  _id: string;
  TitleofProverb: string;
  Proverb: string;
  createdAt: string;
}

export default function TopProverb() {
  const [proverb, setProverb] = useState<Proverb | null>(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://babystory-server.onrender.com/proverb/${id}`)
      .then((response) => {
        setProverb(response.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [id]);

  return (
    <>
      <NavBar />
      <div className="container px-10 py-36 translate-y-[-2%] md:ml-20">
        {proverb ? (
          <div className="w-full max-w-4xl flex justify-between gap-20">
            <div>
              <h2 className="text-4xl font-bold uppercase">{proverb.TitleofProverb}</h2>
              <p className="text-gray-300">by BYIRINGIRO</p>
              <ul className="flex gap-4 mt-1 ml-2">
                <li className="text-green-600"><FaWhatsappSquare/></li>
                <li className="text-sky-600"><FaFacebook/></li>
                <li className="text-red-700/50">< FaInstagramSquare /></li>
              </ul> <br />
              <p>{proverb.Proverb}</p>
              <p className="text-gray-300">{new Date(proverb.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <br />
        <div className="flex gap-[55%]">
          <button className="border p-3 font-bold rounded-full text-gray-500 hover:bg-black transition-all duration-500 ease-in">Prev</button>
          <button className="border p-3 font-bold rounded-full text-gray-500 hover:bg-black transition-all duration-500 ease-in">Next</button>
        </div>
      </div>
      <div className="bg-black/50 rounded h-1 ml-10 mr-10"></div>
      <BottomStory />
      <Footer />
    </>
  );
}
