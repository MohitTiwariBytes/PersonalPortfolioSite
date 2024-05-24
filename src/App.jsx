import HomePage from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondSection from "./Sections/SecondSection";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<SecondSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
