import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./components/Menu";
import "./App.css";
import Lodging from "./pages/Lodging";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Menu />
      <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/lodging" element={<Lodging  />} />
      <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
