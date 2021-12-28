import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signUp.css";
import { auth } from "../firebase";

function SignUpScreen() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = ({ currentTarget: input }) => {
    const data = { ...user };
    data[input.name] = input.value;
    setUser(data);
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((authUser) => {
        alert("User Created");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((authUser) => {
        alert("Login Successfull");
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signup">
      <form>
        <h2>Sign In</h2>
        <input
          type="email"
          onChange={handleChange}
          placeholder="Email Address"
          value={user.email}
          name="email"
        ></input>
        <input
          onChange={handleChange}
          value={user.password}
          type="password"
          placeholder="Password"
          name="password"
        ></input>
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signup__grey">New to Netflix? </span>
          <span className="signup__link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
