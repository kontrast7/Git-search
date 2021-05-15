import React from "react";
import startPageImg from "../Img/start-page.svg";
import "./startpage.css";

const Startpage = () => {
  return (
    <div className="container">
      <div className="start-page-content">
      <img src={startPageImg}></img>
      <div className="start-page-text">
        Start with searching <br /> a GitHub user
      </div>
      </div>
    </div>
  );
};

export default Startpage;
