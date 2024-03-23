import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
// import NavBar from "./Components/NavBar";

import Home from "./Components/Home";
import Story from "./Components/Story";
import Parent from "./Components/Parent";
import Preview from "./Components/Preview";
import Homepge from "./Components/HomePage";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Homepge />} />
            <Route path="Homepge" element={<Home />} />
            <Route path="Story" element={<Story />} />
            <Route path="Parent" element={<Parent />} />
            <Route path="Preview" element={<Preview />} />
          </Routes>
        </main>
      </BrowserRouter >
    </div >
  )
}
