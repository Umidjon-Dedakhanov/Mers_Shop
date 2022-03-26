import React, { Component } from "react";

import FacebookLogin from "react-facebook-login";
import { setAuthAC } from "../../redux/auth-reducer";

import style from './LoginWith.module.css'

export default class LoginWithFacebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };

  responseFacebook = (response) => {
    console.log(response);
    if (response.status !== "unknown") {
      this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
      });
    }
  };

  componentClicked = () => {
    console.log("clicked");
    setAuthAC(true)
  };

  render() {
    const { email, isLoggedIn, name, picture } = this.state;
    let fbContent;

    if (isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px",
          }}
        >
          <img src={picture} alt={name} />
          <h2>Welcome {name}</h2>
          Email: {email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="327714234606931"
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          icon="fa-facebook"
          textButton="Facebok"
          size='metro'
          cssClass={style.facebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}
