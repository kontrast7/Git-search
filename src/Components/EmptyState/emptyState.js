import React from "react";
import emptyStateImg from "../Img/user.svg";
import "./emptyState.css";

const EmptyState = () => {
  return (
    <div className="container">
      <div className="empty-page-content">
      <img src={emptyStateImg} alt="empty-page-img"></img>
      <div className="empty-page-text">
      User not found
      </div>
      </div>
    </div>
  );
};

export default EmptyState;
