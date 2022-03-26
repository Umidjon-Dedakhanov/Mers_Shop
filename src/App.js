import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { HeaderOrder } from "./components/home/headerOrder/HeaderOrder";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/about/About";
import { EngineRepair } from "./components/engineRepair/EngineRepair";
import { Contact } from './components/contact/Contact';
import { Login } from "./components/login/Login";
import Karzinka from "./routes/karzinka/Karzinka";
import KarzinkaSubmission from "./routes/karzinka-submission/KarzinkaSubmission";
import KarzinkaPayment from "./routes/karzinka-payment/KarzinkaPayment";

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
        <Route path="/engine" element={<EngineRepair />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/karzinka" element={<Karzinka />} />
        <Route path="/karzinka/submission" element={<KarzinkaSubmission />} />
        <Route path="/karzinka/payment" element={<KarzinkaPayment />} />
      </Routes>
      {!pathname.includes("/karzinka") && 
        <Footer/>
      }
    </div>
  );
}

export default App;
