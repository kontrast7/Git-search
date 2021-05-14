import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./repositories.css";

const PER_PAGE = 4;

const Repositories = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    // ХАРД КОД! ВЫВОДИТ ТОЛЬКО МОИ РЕПЫ
    fetch(`https://api.github.com/users/kontrast7/repos`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map(({ name, html_url }) => (
      <a className="repos-item" href={html_url}>
        {name}
      </a>
    ));

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div className="repos-list">
      {currentPageData}
      <ReactPaginate
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
    </div>
  );
};

export default Repositories;
