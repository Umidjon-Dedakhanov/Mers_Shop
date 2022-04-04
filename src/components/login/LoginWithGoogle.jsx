import React from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

// refresh token
import { refreshTokenSetup } from "../../utils/refreshToken";

import style from "./LoginWith.module.css";

const clientId =
  "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

function LoginWithGoogle() {
  const history = useHistory();
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );

    history.push("/");

    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
        className={style.google}
      />
    </div>
  );
}

export default LoginWithGoogle;
