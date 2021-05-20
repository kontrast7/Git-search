import React, { Component } from "react";
import Header from "../App/Components/Header/header";
import RenderPage from "../App/Components/RenderPage/renderPage.js";
import Startpage from "../App/Components/StartPage/startPage.js";

import "./App.css";

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
