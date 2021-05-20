import React, { Component } from "react";
import Header from "../Header/header";
import RenderPage from "../RenderPage/renderPage.js";
import Startpage from "../StartPage/startPage.js";

import "./app.css";

class App extends Component {
  state = {
    url: null,
  };

  loginValue = (e) => {
    e.preventDefault();
    const loginUser = e.target.elements.loginUser.value;

    this.setState({
      url: loginUser,
    });
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <Header loginMethod={this.loginValue.bind(this)} />
          {this.state.url === null ? (
            <Startpage />
          ) : (
            <RenderPage url={this.state.url} />
          )}
        </div>
      </>
    );
  }
}

export default App;
