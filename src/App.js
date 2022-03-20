import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { HeaderOrder } from "./components/home/headerOrder/HeaderOrder";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/about/About";

function App() {
  return (
    <div className="App">
      <HeaderOrder />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
