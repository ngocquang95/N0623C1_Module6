import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Pagination({ perPage, children, url }) {
  const [repositories, setRepositories] = useState([]);
  const [pageOffset, setPageOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    axios
      .get(url, {
        params: {
          _page: pageOffset,
          _limit: perPage,
        },
      })
      .then((res) => {
        const newPageCount = Math.ceil(res.headers["x-total-count"] / perPage);
        setRepositories(res.data);
        setPageCount(newPageCount);
      })
      .catch((error) => {
        setApiError(error.message);
        setRepositories([]);
        setPageCount(0);
      });
  }, [pageOffset, perPage]);

  const handlePageChange = (event) => {
    console.log(event);
    setPageOffset(event.selected);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      {apiError && (
        <div className="alert alert-danger" role="alert">
          {apiError}
        </div>
      )}
      {children(repositories)}
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        forcePage={pageOffset}
      />
    </div>
  );
}

export default Pagination;
