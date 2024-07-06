import HomePage from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondSection from "./HomeSections/SecondSection";
import Navbar from "./Components/Navbar";
import "./App.css";
import { gsap, TweenLite } from "gsap";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />

        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
