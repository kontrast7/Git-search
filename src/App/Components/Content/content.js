import React from "react";
import "./content.css";
import followers from "../Img/followers.svg";
import following from "../Img/following.svg";

const Content = (props) => {
  return (
    <div className="left-panel">
      <img
        className="img-fluid user-avatar"
        src={props.avatar_url}
        alt="user-avatar"
      ></img>
      <div className="user-name">{props.bio}</div>
      <a
        href={props.login_url}
        className="user-login"
        target="_blank"
        rel="noreferrer"
      >
        {props.login}
      </a>

      <div className="foll-block">
        <div className="user-followers">
          <img src={followers} className="followers-icon" alt="followers"></img>
          {props.followers} followers
        </div>
        <div className="user-following">
          <img src={following} className="following-icon" alt="following"></img>
          {props.following} following
        </div>
      </div>
    </div>
  );
};

export default Content;
