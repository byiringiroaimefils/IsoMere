import { BrowserRouter,Routes, Route } from 'react-router-dom';
import React from 'react'
import NavBar from "./Components/NavBar";

import Home from "./Components/Home";
import Story from "./Components/Story";
import Parent from "./Components/Parent";
import Setting from "./Components/Setting";


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="Story" element={<Story/>} />
            <Route path="Parent" element={<Parent/>} />
            <Route path="Setting" element={<Setting/>} />
          </Routes>
        </main>
      </BrowserRouter >
    </div >
  )
}
