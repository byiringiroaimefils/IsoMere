import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {  SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import Home from "./Components/Home";
import Proverbs from "./Components/Proverbs";
import Setting from "./Components/Setting";
import Preview from "./Components/Preview";
import Homepge from "./Components/HomePage";
import Story from "./Components/Pages/Story";
import Proverb from "./Components/Pages/Proverbs";
import FormStory from "./Components/Froms/FormStory";
import FormProverb from "./Components/Froms/FormProverb";
import ViewStory from "./Components/Pages/ViewStory"
import ViewProverb from "./Components/Pages/ViewProverb"
import Edit from "./Components/Pages/Edit"
import DeleteProverb from "./Components/Pages/DeletePro"
import DeleteStory from "./Components/Pages/DeleteStory"
  


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            
          <Route path="/" element={<Homepge />} />
          <Route path="Homepge" element={
            <>
              <SignedIn>
                <Home />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn  />
              </SignedOut>
            </>
          } />
          <Route path="Proverbs" element={
            <>
              <SignedIn>
                <Proverbs />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          <Route path="Setting" element={
            <>
              <SignedIn>
                <Setting />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }>
            <Route path="Story" element={<Story />} />
            <Route path="Proverb" element={<Proverb />} />
          </Route>
          <Route path="Preview" element={
            <>
              <SignedIn>
                <Preview />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          <Route path="FormStory" element={<FormStory />} />
          <Route path="FormProverb" element={<FormProverb />} />
          <Route path="story/:id" element={<ViewStory />} />
          <Route path="proverb/:id" element={<ViewProverb />} />
          <Route path="Edit" element={<Edit />} />
          <Route path="deleteProveb/:id" element={<DeleteProverb/>} />
          <Route path="deleteStory/:id" element={<DeleteStory />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}