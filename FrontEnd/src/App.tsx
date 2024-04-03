import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
// import NavBar from "./Components/NavBar";

import Home from "./Components/Home";
import Proverbs from "./Components/Proverbs";
import Setting from "./Components/Setting";
import Preview from "./Components/Preview";
import Homepge from "./Components/HomePage";

import Story from "./Components/Pages/Str";
import Proverb from "./Components/Pages/Prov";



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Homepge />} />
            <Route path="Homepge" element={<Home />} />
            <Route path="Proverbs" element={<Proverbs />} />
            <Route path="Setting" element={<Setting />}>
              <Route path="Story" element={<Story />} />
              <Route path="Proverb" element={<Proverb />} />
            </Route>
            <Route path="Preview" element={<Preview />} />
          </Routes>
        </main>
      </BrowserRouter >
    </div >
  )
}
