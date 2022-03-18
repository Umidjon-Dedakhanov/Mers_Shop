import "./App.css";
import { Footer } from "./components/footer/Footer";
import { HeaderOrder } from "./components/home/headerOrder/HeaderOrder";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <HeaderOrder />
      <Navbar />
      <Home />

      <Footer />
    </div>
  );
}

export default App;
