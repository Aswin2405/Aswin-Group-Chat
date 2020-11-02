import { Button } from "@material-ui/core";
import React from "react";
import "./login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
function Login() {
  const [state, dispatch] = useStateValue();
  const SignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatchEvent({
          type: actionTypes.SET_USER,
          user: result.user
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"
          alt=""
        />
        <Button onClick={SignIn}>Sign In Into Aswin Slack</Button>
      </div>
    </div>
  );
}

export default Login;
