import "./App.css";
import Model from "./Pages/Model";
import Tab from "./Pages/Tab";
import Data from "./Pages/Data";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProgressBar from "./Pages/ProgressBar";
import Carousel from "./Pages/Carousel";
import MiniProjects from "./Pages/MiniProjects";
import Parallelogram from "./Pages/Parallelogram";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MiniProjects />} />

        <Route path="/model" element={<Model />} />
        <Route path="/tab" element={<Tab />} />
        <Route path="/tab/:tabName" element={<Tab />} />
        <Route path="/data" element={<Data />} />
        <Route path="/progressbar" element={<ProgressBar />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/parallelogram" element={<Parallelogram />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
