import { Route, Switch, useLocation } from "react-router-dom";
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
import Account from "./routes/account/Account";

function App() {
  const {pathname } = useLocation(); 
  return (
    <div className="App">
      {!pathname.includes("/karzinka") && 
        <>
          <HeaderOrder />
          <Navbar />
        </>
      }
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/engine" component={EngineRepair} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route exact path="/karzinka" component={Karzinka} />
        <Route path="/karzinka/submission" component={KarzinkaSubmission} />
        <Route path="/karzinka/payment" component={KarzinkaPayment} />
        <Route path="/account" component={Account} />
      </Switch>
      {!pathname.includes("/karzinka") && 
        <Footer/>
      }
    </div>
  );
}

export default App;
