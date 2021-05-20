import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Content from "../Content/content";
import "./renderPage.css";
import prew from "../Img/Rectangle (Stroke).svg";
import next from "../Img/Rectangle.svg";
import EmptyState from "../EmptyState/emptyState";
import EmptyRepos from "../EmptyRepos/emptyRepos";

const PER_PAGE = 4;

const RenderPage = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    fetchData();
  }, [props.url]);

  function fetchData() {
    fetch(`https://api.github.com/users/${props.url}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });

    fetch(`https://api.github.com/users/${props.url}`)
      .then((res) => res.json())
      .then((dataUser) => {
        setDataUser(dataUser);
      });
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  if (data?.message) {
    return <EmptyState />;
  }

  if (dataUser.public_repos === 0) {
    return (
      <div className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <Content
                login={dataUser.login}
                avatar_url={dataUser.avatar_url}
                login_url={dataUser.html_url}
                bio={dataUser.bio}
                followers={dataUser.followers}
                following={dataUser.following}
                public_repos={dataUser.public_repos}
              />
            </div>
            <div className="col-sm-8">
              <div className="cont">
                <EmptyRepos/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map(({ name, html_url, id }) => (
      <a
        key={id}
        className="repos-item"
        href={html_url}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
    ));

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <Content
              login={dataUser.login}
              avatar_url={dataUser.avatar_url}
              login_url={dataUser.html_url}
              bio={dataUser.bio}
              followers={dataUser.followers}
              following={dataUser.following}
              public_repos={dataUser.public_repos}
            />
          </div>
          <div className="col-sm-8">
            <div className="cont">
              <div className="title-repos">
                Repositories ({dataUser.public_repos})
              </div>
              <div className="repos-list">
                {currentPageData}
                <div className="pages">
                  <ReactPaginate
                    previousLabel={<img src={prew} alt="prew" />}
                    nextLabel={<img src={next} alt="next" />}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderPage;
