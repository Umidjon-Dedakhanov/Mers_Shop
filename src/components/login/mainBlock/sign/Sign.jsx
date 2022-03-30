import { NavLink, Route, Switch, useHistory } from "react-router-dom";
import { LoginHelpers } from "./../../../UI/login/LoginHelpers";

import style from "./Sign.module.css";

function SignUpForm() {
  const history = useHistory();

  const onClick = () => {
    history.push("/");
  };
  return (
    <div className={style.main}>
      <label htmlFor="">First name *</label>
      <input autoFocus type="text" />
      <label htmlFor="">Last name *</label>
      <input type="text" />
      <label htmlFor=""> Phone number *</label>
      <input type="number" />
      <label htmlFor="">Email *</label>
      <input type="email" />
      <label htmlFor="">Create password *</label>
      <input type="password" />
      <button onClick={onClick}>Sign Up</button>
      <hr />
    </div>
  );
}

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
      <NavLink to={"/forgetPassword"}>Forget password?</NavLink>
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
          <NavLink to={"/" || "/signIn"}>Sign In</NavLink>
          <NavLink to={"/signUp"}>Sign Up</NavLink>
        </div>
      </div>
      <Switch>
        <Route path="/signUp" render={()=><SignUpForm />} />
        <Route path="/signIn" render={()=><SignInForm />} />
        <Route path={'/'} render={()=><SignInForm />} />
      </Switch>
      <div className={style.helpers}>
        <Switch>
          <Route path="/signUp" render={()=><LoginHelpers inUp="Up" />} />
          <Route
            path="/signIn"
            render={()=><LoginHelpers inUp="In" display="none" />}
          />
          <Route path='*' render={()=><LoginHelpers inUp="In" display="none" />} />
        </Switch>
      </div>
    </>
  );
}
