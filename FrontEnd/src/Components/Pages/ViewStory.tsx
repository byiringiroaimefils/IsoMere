import React from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import NavBar from "../NavBar";
import { FC } from "react"


interface Story {
  _id: string,
  Title: string,
  image: string,
  Decription: string
  createdAt: string
}

const View: FC = () => {
  const [Story, setStory] = useState<Story[]>([]);
  const { id } = useParams();


  useEffect(() => {
    axios.get(`http://localhost:8080/story/${id}`)
      .then((data) => {
        setStory(data.data);
        // setLoading(false)
        
      })
      .catch((error) => {
        console.log('error', error)
        // setLoading(false)
      })
  }, [id])
  console.log(Story)



  return (
    <>
    <NavBar/>
      <div className='Container flex justify-around mt-6 w-full '>
        <div>

          {Story.map(({ _id, Title, image, Decription, createdAt }) => (
            <div key={_id} className='story p-4 w-[650px] md:translate-x-10' >
              <div className='Header '>
                <h2 className='font-bold  text-base '>{Title}</h2>
                <p className='text-sm font-thin text-gray-400'>Parent ( aimefils173@gmail.com ) </p> <br />
                <img src={image} alt="" className='' />
              </div>
              <div className='Description mt-4 '>
                <p>{Decription}</p>
                <p className='text-sm font-thin text-gray-400'>{new Date(createdAt).toString()}</p> <br />
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default View;
