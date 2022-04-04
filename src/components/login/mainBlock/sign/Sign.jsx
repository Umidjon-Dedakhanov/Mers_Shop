import {
  NavLink,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import SignInForm from "./SignIn";
import { LoginHelpers } from "./../../../UI/login/LoginHelpers";
import SignUpForm from "./SignUp";
import style from "./Sign.module.css";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export function Sign() {
  const { url, path } = useRouteMatch();
  const { pathname } = useLocation();
  console.log(url, path);
  const user = useSelector((state) => state.authReducer);
  return user.isAuthenticated && user ? (
    <Redirect
      to={{
        pathname: "/account/myaccount",
        state: {
          from: pathname,
        },
      }}
    />
  ) : (
    <>
      <div className={style.title}>
        <div className={style.title2}>
          <NavLink exact to={"/login/" || "/login/signIn"}>Sign In</NavLink>
          <NavLink exact to={"/login/signUp"}>Sign Up</NavLink>
        </div>
      </div>
      <Switch>
        <Route path="/login/sign-up" render={() => <SignUpForm />} />
        <Route path="/login/sign-in" render={() => <SignInForm />} />
        <Route path={"/"} render={() => <SignInForm />} />
      </Switch>
      <div className={style.helpers}>
        <Switch>
          <Route
            path="/login/sign-up"
            render={() => <LoginHelpers inUp="Up" />}
          />
          <Route
            path="/login/sign-in"
            render={() => <LoginHelpers inUp="In" display="none" />}
          />
          <Route
            path="*"
            render={() => <LoginHelpers inUp="In" display="none" />}
          />
        </Switch>
      </div>
    </>
  );
}
