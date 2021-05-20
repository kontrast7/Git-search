import React from "react";
import emptyReposImg from "../Img/rep.svg";
import "./emptyRepos.css";

const EmptyRepos = () => {
  return (
    <div className="container">
      <div className="empty-repos-content">
        <img src={emptyReposImg} alt="empty-repos-img"></img>
        <div className="empty-repos-text">Repository list is empty</div>
      </div>
    </div>
  );
};

export default EmptyRepos;
