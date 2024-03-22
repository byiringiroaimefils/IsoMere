import React from 'react'

export default function Home() {

  const alphArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  return (
    <div className='Container flex justify-around mt-6'>
      <div className='story ml-10 translate-x-20'>
        <div className='Header '>
          <h2 className='font-bold  text-base'>Story Teller</h2>
          <p className='text-sm font-thin text-gray-400'>Loremipsum.</p> <br />
          <img src="https://learnenglishkids.britishcouncil.org/sites/kids/files/styles/max_1300x1300/public/image/RS7855_ThinkstockPhotos-625123172-hig.jpg?itok=T8SoCelX" alt="" className='w-[600px]' />
        </div>

        <div className='Description mt-2 w-[600px]'>
          <p>
            Sit duis est minim proident non nisi velit non consectetur. Esse
            adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
            Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
            incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
            fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
            nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
            occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
            officia sint labore. Tempor consectetur excepteur ut fugiat veniam
            commodo et labore dolore commodo pariatur.
          </p>
          <p className='text-sm font-thin text-gray-400'>20th, March 2024</p> <br />
        </div>
      </div>
      <div className='UpdatedStory mt-5 mr-12'>
        <div className="topstory">
          <h4 className='font-extrabold'>Top Stories</h4>
          <p className='text-sm font-thin text-gray-400'>Lorem ipsum dolor sit amet consectetur</p>

          <ul>
          <li className='text-lg cursor-pointer'><span className='text-gray-400 text-2xl  '>1.</span>  Lorem ilisum dolor sit amet,</li>
            <li className='text-lg cursor-pointer'><span className='text-gray-400 text-2xl'>2.</span>Game of choressit amet,</li>
            <li className='text-lg cursor-pointer'><span className='text-gray-400 text-2xl'>3.</span>Lorem ilisum dolor sit amet,</li>
          </ul>
        </div>
        <div className="Alphabetics mt-20">
          <h4 className='font-extrabold '>Alphabetics</h4>
          <p className='text-sm font-thin text-gray-400'>Lorem ipsum dolor sit amet consectetur</p>
          <div className='grid grid-cols-6 gap-2 '>
            {alphArray.map(letter => (
              <button key={letter} className='border p-2 font-base '>{letter}</button>
            ))}
          </div>

        </div>
      </div>
    </div>

  )
}
