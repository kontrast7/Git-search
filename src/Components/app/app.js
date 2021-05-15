import React, { Component } from "react";
import Header from "../Header/header";
import RenderPage from "../RenderPage/RenderPage";
import Startpage from "../Startpage/startpage";

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
    console.log(this.state.url, "this.State.url");
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
