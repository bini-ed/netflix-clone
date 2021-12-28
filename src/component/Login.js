import React, { useState } from "react";
import "../css/login.css";
import SignUpScreen from "./signUpScreen";

function Login() {
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="login">
      <div className="login__screen__background">
        <img
          className="login__screen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="back"
        />
        <button className="login__button" onClick={() => setSignUp(true)}>
          Sign in
        </button>
        <div className="login__screen__gradient"></div>
      </div>

      <div className="login__screen_body">
        {signUp ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimitted films,Tv programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="login__screen__input">
              <form>
                <input
                  type="email"
                  placeholder="Email Address"
                  onClick={() => setSignUp(true)}
                />
                <button className="login__screen__getstarted">
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
