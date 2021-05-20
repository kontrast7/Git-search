import React from "react";
import startPageImg from "../Img/start-page.svg";
import "./startPage.css";

const Startpage = () => {
  return (
    <div className="container">
      <div className="start-page-content">
      <img src={startPageImg} alt="start-page-img"></img>
      <div className="start-page-text">
        Start with searching <br /> a GitHub user
      </div>
      </div>
    </div>
  );
};

export default Startpage;
