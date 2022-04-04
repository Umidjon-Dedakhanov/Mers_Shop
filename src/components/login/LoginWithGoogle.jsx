import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { authUser } from "../../redux/actions";
import { useDispatch } from "react-redux";

// refresh token
import { refreshTokenSetup } from "../../utils/refreshToken";

import style from "./LoginWith.module.css";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function LoginWithGoogle() {
  const dispatch = useDispatch();
  const onSuccess = (res) => {
    const {accessToken, ...profileObj} = res;
    const gUser = {
      accessToken: accessToken,
      user: profileObj
    }
    dispatch(authUser(gUser));
    refreshTokenSetup(res);
  };

  const onFailure = () => {
    alert(
      "Failed to login."
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
        className={style.google}
      />
    </div>
  );
}

export default LoginWithGoogle;
