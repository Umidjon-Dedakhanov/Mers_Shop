import { Route, Routes } from "react-router-dom";

import { EngineRepair } from "./components/engineRepair/EngineRepair";
import { HeaderOrder } from "./components/home/headerOrder/HeaderOrder";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/about/About";
import { Login } from "./components/login/Login";
import { Home } from "./components/home/Home";

import "./App.css";
import { News } from "./components/news/News";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <HeaderOrder />
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/about"
          element={
            <>
              <HeaderOrder />
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="engine"
          element={
            <>
              <HeaderOrder />
              <Navbar />
              <EngineRepair />
              <Footer />
            </>
          }
        />
        <Route
          path="contact"
          element={
            <>
              <HeaderOrder />
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="news"
          element={
            <>
              <HeaderOrder />
              <Navbar />
              <News />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <HeaderOrder />
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
