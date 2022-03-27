import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { HeaderOrder } from "./components/home/headerOrder/HeaderOrder";
import { Contact } from "./components/contact/Contact";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/about/About";
import { Login } from "./components/login/Login";
import Karzinka from "./routes/karzinka/Karzinka";
import KarzinkaSubmission from "./routes/karzinka-submission/KarzinkaSubmission";
import { Home } from './components/home/Home';
import { EngineRepair } from './components/engineRepair/EngineRepair';
import { News } from './components/news/News';
import { Products } from './components/products/Products';

function App() {
  const {pathname } = useLocation(); 
  console.log(pathname)
  return (
    <div className="App">
      {!pathname.includes("/karzinka") && 
        <>
          <HeaderOrder />
          <Navbar />
        </>
      }
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="engine" element={<EngineRepair />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/*" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="/karzinka" element={<Karzinka />} />
        <Route path="/karzinka/submission" element={<KarzinkaSubmission />} />
        <Route path="*" element={<Home />} />

      </Routes>
      {!pathname.includes("/karzinka") && 
        <Footer/>
      }
    </div>
  );
}

export default App;
