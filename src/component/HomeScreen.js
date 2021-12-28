import React from "react";
import "../css/homeScreen.css";
import Banner from "./Banner";
import Nav from "./Nav";
import Rows from "./Rows";
import { request } from "./utils/request";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />

      {request.map((items) => (
        <Rows title={items.name} fetchUrl={items.url} isLarge={items.isLarge} />
      ))}
    </div>
  );
}

export default HomeScreen;
