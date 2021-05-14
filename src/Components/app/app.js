import React, { Component } from "react";
import Header from "../Header/header";
import Content from "../Content/content";
import Repositories from "../Repositories/Repositories.js"

import "./app.css";

class App extends Component {
  state = {
    login: null,
    avatar_url: null,
    bio: null,
    followers: null,
    following: null,
    public_repos: null,
    count: null,
    error: null,
  };
  loginValue = async (e) => {
    e.preventDefault();
    const loginUser = e.target.elements.loginUser.value;

    if (loginUser) {
      const url = await fetch(`https://api.github.com/users/${loginUser}`);
      const data = await url.json();

      this.setState({
        login: data.login,
        avatar_url: data.avatar_url,
        bio: data.bio,
        followers: data.followers,
        following: data.following,
        public_repos: data.public_repos,
        error: "",
      });
    }
  };

  
  render() {
    return (
      <>
        <div className="wrapper">
          <Header loginMethod={this.loginValue} />
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-4">
                  <Content
                    login={this.state.login}
                    avatar_url={this.state.avatar_url}
                    bio={this.state.bio}
                    followers={this.state.followers}
                    following={this.state.following}
                    public_repos={this.state.public_repos}
                  />
                </div>
                <div className="col-sm-8">
                  <div className="cont">
                    <div className="title-repos">
                      Repositories ({this.state.public_repos})
                    </div>

                    <div className="repositories">
                      <div className="App">

                        <Repositories loginMethod={this.loginValue}/>
                        {/* <ReactPaginate
                          previousLabel={"← Previous"}
                          nextLabel={"Next →"}
                          pageCount={pageCount}
                          onPageChange={handlePageClick}
                          containerClassName={"pagination"}
                          previousLinkClassName={"pagination__link"}
                          nextLinkClassName={"pagination__link"}
                          disabledClassName={"pagination__link--disabled"}
                          activeClassName={"pagination__link--active"}
                        />
                        {currentPageData} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
