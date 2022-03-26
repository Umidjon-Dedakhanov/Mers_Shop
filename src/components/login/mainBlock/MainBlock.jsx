import React from "react";
import { Route, Routes } from "react-router-dom";

import style from "./MainBlock.module.css";
import { Sign } from "./sign/Sign";
import { Password } from "../../UI/login/Password";

export const MainBlock = () => {
  return (
    <div className={style.body}>
      <div className={style.box}>
        <Routes>
          <Route index element={<Sign />} />
          <Route
            path="/forgetPassword"
            element={
              <Password
                pathname={"/enterCode"}
                title={"Account Setting"}
                desc={
                  "Forget your password? Please enter your phone number or email address. You will resive a link to create a new password via email"
                }
                btnText={"Reset password"}
              />
            }
          />
          <Route
            path="/enterCode"
            element={
              <Password
                pathname={"/save"}
                title={"Enter code"}
                btnText={"Submit"}
              />
            }
          />
          <Route
            path="/save"
            element={
              <Password
                pathname={"/enterCode"}
                title={"You changed the password"}
                btnText={"Go previous page"}
              />
            }
          />
          <Route path="*" element={<Sign />} />
        </Routes>
      </div>
    </div>
  );
};
