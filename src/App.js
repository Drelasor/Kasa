import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import About from "./pages/About";
import Footer from "./components/Footer";
import Appart from "./pages/Appart"
import "./css/app.scss";


function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appart/:id" element={<Appart />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
