import React from "react";
import { GoogleLogin } from "react-google-login";

// refresh token
import { refreshTokenSetup } from "../../utils/refreshToken";

import style from "./LoginWith.module.css";

const clientId =
  "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

function LoginWithGoogle() {

  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
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
