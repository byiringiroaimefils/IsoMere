import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
            <Route path="FormStory" element={<FormStory />} />
            <Route path="FormProverb" element={<FormProverb/>} />
            <Route path="ViewStory/:id" element={<ViewStory/>} />
            <Route path="ViewProverb/:id" element={<ViewProverb/>} />
          </Routes>
        </main>
      </BrowserRouter >
    </div >
  )
}
