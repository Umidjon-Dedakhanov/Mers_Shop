import React from "react";
import { authUser } from "../../redux/actions";
import { useDispatch } from "react-redux";

import FacebookLogin from "react-facebook-login";

import style from "./LoginWith.module.css";

const LoginWithFacebook = () => {
  const dispatch = useDispatch();
  const responseFacebook = (response) => {
    const {accessToken, ...user} = response;

    const fbUser = {
      accessToken: accessToken,
      user: user
    }
    if (response.status !== "unknown") {
        dispatch(authUser(fbUser))
    }
  };

  const componentClicked = () => {
    console.log("clicked");
  };
  return (
    <div
      style={{
        width: "100%",
        margin: "auto",
        padding: "10px 0px",
      }}
    >
      <FacebookLogin
        appId="3125775214337180"
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        icon="fa-facebook"
        textButton="Facebok"
        size="metro"
        cssClass={style.facebook}
      />
    </div>
  );
};

export default LoginWithFacebook;
