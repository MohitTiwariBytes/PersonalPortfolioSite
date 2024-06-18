import HomePage from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondSection from "./HomeSections/SecondSection";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <SecondSection />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
