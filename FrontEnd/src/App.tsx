import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import Home from "./Components/Home";
import HomePage from "./Components/Homepage";
import Proverbs from "./Components/Proverbs";
import Setting from "./Components/Setting";
import Biblical from "./Components/Bibical";
import Story from "./Components/Pages/Story-Table";
import Proverb from "./Components/Pages/Proverbs-Table";
import Bibilical from "./Components/Pages/Biblical-Table";
import FormStory from "./Components/Forms/FormStory";
import FormProverb from "./Components/Forms/FormProverb";
import FormBiblical from "./Components/Forms/FormsBibilical";
// import ViewStory from "./Components/Pages/ViewStory"
// import ViewProverb from "./Components/Pages/ViewProverb"
import EditS from "./Components/Forms/EditStory"
import EditProverb from "./Components/Forms/EditProverb"
import EditBiblical from "./Components/Forms/EditBiblical"
// import DeleteProverb from "./Components/Pages/Deletion/DeletePro"
// import DeleteStory from "./Components/Pages/Deletion/DeleteStory"
import About from "./Components/Service/AboutUs"
import Terms from "./Components/Service/Terms"
import Service from "./Components/Service/service"
import StoryView from "./Components/Top & View/Storyview"

import Subscribe from "./Components/Service/Subscribe"
import Idea from "./Components/Service/Idea"

import TopProverb from "./Components/Top & View/TopProverb"
import TopStory from "./Components/Top & View/TopStory"
import TopBStory from "./Components/Top & View/TopBStory"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Proverbs" element={<Proverbs />} />
          <Route path="/Biblical" element={<Biblical />} />
          
          {/* Setting routes with proper nesting */}
          <Route path="/Setting" element={
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
            <Route path="Biblical" element={<Bibilical />} />
            {/* <Route path="Biblical" element={<Bibilical />} /> */}
          </Route>

          {/* Form routes */}
          <Route path="/FormStory" element={
            <>
              <SignedIn>
                <FormStory />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          <Route path="/FormProverb" element={
            <>
              <SignedIn>
                <FormProverb />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          <Route path="/FormBiblical" element={
            <>
              <SignedIn>
                <FormBiblical />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />

          {/* Edit routes */}
          <Route path="/editS/:id" element={
            <>
              <SignedIn>
                <EditS />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          <Route path="/editP/:id" element={
            <>
              <SignedIn>
                <EditProverb />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          <Route path="/editB/:id" element={
            <>
              <SignedIn>
                <EditBiblical />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />

          {/* View routes */}
          <Route path="/StoryView/:id" element={<StoryView />} />
          <Route path="/TopStory/:id" element={<TopStory />} />
          <Route path="/TopBStory/:id" element={<TopBStory />} />
          <Route path="/TopProverb/:id" element={<TopProverb />} />

          {/* Delete routes */}
          {/* <Route path="/deleteProveb/:id" element={<DeleteProverb />} />
          <Route path="/deleteStory/:id" element={<DeleteStory />} /> */}

          {/* Service routes */}
          <Route path="/About" element={<About />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Service" element={<Service />} />

          {/* Protected routes */}
          <Route path="/subscribe" element={
            <>
              <SignedIn>
                <Subscribe />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          <Route path="/Idea" element={
            <>
              <SignedIn>
                <Idea />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}