import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { HeaderOrder } from "./components/home/headerOrder/HeaderOrder";
import { Contact } from "./components/contact/Contact";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/about/About";
import { Login } from "./components/login/Login";
import Karzinka from "./routes/karzinka/Karzinka";
import KarzinkaSubmission from "./routes/karzinka-submission/KarzinkaSubmission";
import KarzinkaPayment from "./routes/karzinka-payment/KarzinkaPayment";
import Account from "./routes/account/Account";
import { EngineRepair } from "./components/engineRepair/EngineRepair";
import { Products } from "./components/products/Products";
import { Home } from "./components/home/Home";
import { News } from "./components/news/News";

function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="App">
      {!pathname.includes("/karzinka") && !pathname.includes("/login") && (
        <>
          <HeaderOrder />
          <Navbar />
        </>
      )}
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/about" component={() => <About />} />
        <Route path="/engine" component={() => <EngineRepair />} />
        <Route path="/product" component={() => <Products />} />
        <Route path="/contact" component={() => <Contact />} />
        <Route path="/new" component={() => <News />} />
        <Route path="/karzinka" component={() => <Karzinka />} />
        <Route
          path="/karzinka/submission"
          component={() => <KarzinkaSubmission />}
        />
        <Route path="/karzinka/payment" component={() => <KarzinkaPayment />} />
        <Route path="/account/myaccount" component={() => <Account />} />
        <Route path="*" component={() => <Login />} />
      </Switch>
      {!pathname.includes("/karzinka") && !pathname.includes("/login") && (
        <Footer />
      )}
    </div>
  );
}

export default App;
