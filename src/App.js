import { lazy } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import KarzinkaSubmission from "./routes/karzinka-submission/KarzinkaSubmission";
import { HeaderOrder } from "./components/home/headerOrder/HeaderOrder";
import KarzinkaPayment from "./routes/karzinka-payment/KarzinkaPayment";
import Private from "./routes/private/PrivateRoute";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Card } from "./components/news/card/Card";
import Karzinka from "./routes/karzinka/Karzinka";
import { withSuspense } from "./hoc/withSuspense";
import Account from "./routes/account/Account";

import "./App.css";

function App() {
  const Home = lazy(() =>
    import("./components/home/Home").then((module) => ({
      default: module.Home,
    }))
  );
  const About = lazy(() =>
    import("./components/about/About").then((module) => ({
      default: module.About,
    }))
  );
  const Products = lazy(() =>
    import("./components/products/Products").then((module) => ({
      default: module.Products,
    }))
  );
  const Contact = lazy(() =>
    import("./components/contact/Contact").then((module) => ({
      default: module.Contact,
    }))
  );
  const EngineRepair = lazy(() =>
    import("./components/engineRepair/EngineRepair").then((module) => ({
      default: module.EngineRepair,
    }))
  );
  const News = lazy(() =>
    import("./components/news/News").then((module) => ({
      default: module.News,
    }))
  );
  const Login = lazy(() =>
    import("./components/login/Login").then((module) => ({
      default: module.Login,
    }))
  );

  const { pathname } = useLocation();
  return (
    <div className="App">
      {!pathname.includes("/karzinka") && !pathname.includes("/login") && (
        <>
          <HeaderOrder />
          <Navbar />
        </>
      )}
      <Card />
      <Switch>
        <Private path="/account" component={Account} />
        <Private path="/karzinka/payment" component={KarzinkaPayment} />
        <Private path="/karzinka" component={Karzinka} />
        <Private path="/karzinka/submission" component={KarzinkaSubmission} />
        <Route path="/about" render={withSuspense(About)} />
        <Route path="/engine" render={withSuspense(EngineRepair)} />
        <Route path="/product" render={withSuspense(Products)} />
        <Route path="/contact" render={withSuspense(Contact)} />
        <Route path="/new" render={withSuspense(News)} />
        <Route path="/account" render={withSuspense(EngineRepair)} />
        <Route path="/karzinka/payment" render={withSuspense(EngineRepair)} />
        <Route path="/karzinka" render={withSuspense(EngineRepair)} />
        <Route path="/karzinka/submission" render={withSuspense(EngineRepair)} />
        <Route path="/login" render={withSuspense(Login)} />
        <Route path="/" render={withSuspense(Home)} />

        <Route path="*" render={withSuspense(Login)} />
      </Switch>
      {!pathname.includes("/karzinka") && !pathname.includes("/login") && (
        <Footer />
      )}
    </div>
  );
}

export default App;
