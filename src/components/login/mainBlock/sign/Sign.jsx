import { NavLink, Route, Switch, useHistory } from "react-router-dom";
import { LoginHelpers } from "./../../../UI/login/LoginHelpers";
import SignUpForm from "./SignUp";
import style from "./Sign.module.css";

function SignInForm() {
  const history = useHistory();

  const onClick = () => {
    history.push("/");
  };
  return (
    <div className={style.main}>
      <label htmlFor="">Email</label>
      <input autoFocus type="email" />
      <label htmlFor="">Password</label>
      <input type="password" />
      <NavLink exact to={"/login/forgetPassword"}>Forget password?</NavLink>
      <button onClick={onClick}>Sign In</button>
      <hr />
    </div>
  );
}

export function Sign() {
  return (
    <>
      <div className={style.title}>
        <div className={style.title2}>
          <NavLink exact to={"/login/" || "/login/signIn"}>Sign In</NavLink>
          <NavLink exact to={"/login/signUp"}>Sign Up</NavLink>
        </div>
      </div>
      <Switch>
        <Route path="/login/signUp" render={() => <SignUpForm />} />
        <Route path="/login/signIn" render={() => <SignInForm />} />
        <Route path={"/"} render={() => <SignInForm />} />
      </Switch>
      <div className={style.helpers}>
        <Switch>
          <Route
            path="/login/signUp"
            render={() => <LoginHelpers inUp="Up" />}
          />
          <Route
            path="/login/signIn"
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
