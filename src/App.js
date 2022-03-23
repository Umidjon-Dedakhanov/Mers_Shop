import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { HeaderOrder } from "./components/home/headerOrder/HeaderOrder";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/about/About";
import { EngineRepair } from "./components/engineRepair/EngineRepair";
import { Contact } from './components/contact/Contact';
import { Login } from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <HeaderOrder />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="engine" element={<EngineRepair />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
