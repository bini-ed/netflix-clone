import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./component/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ProfileScreen from "./component/profileScreen";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(selectUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  const NotFOund = () => {
    return (
      <div style={{ color: "white" }}>
        <h1>404</h1>
        <h3>Not Found</h3>
      </div>
    );
  };

  return (
    <div className="app">
      <Router>
        {!users ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" exact element={<HomeScreen />}></Route>
            <Route path="/profile" element={<ProfileScreen />}></Route>
            <Route path="*" element={<NotFOund />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
