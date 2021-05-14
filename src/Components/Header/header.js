import React from "react";
import logo from "../Img/logo.svg";
import "./header.css";

const Header = (props) => {
  return (
    <div className="header">
      <img className="logo-header" src={logo} alt="logo-header"></img>
      <form onSubmit={props.loginMethod}>
        <input className="input-header" type="text" name="loginUser" placeholder="Login" />
      </form>
    </div>
  );
};
export default Header;
