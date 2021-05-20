import React from "react";
import logo from "../Img/logo.svg";
import "./header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="col-sm-1">
        <img className="logo-header" src={logo} alt="logo-header"></img>
      </div>
      <div className="col-sm-5">
        <form className="form-header" onSubmit={props.loginMethod}>
          <input
            className="input-header"
            type="text"
            name="loginUser"
            placeholder="Login"
          />
        </form>
      </div>
    </div>
  );
};
export default Header;
