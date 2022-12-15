import React, { useEffect, useState } from 'react';
import './Pagination.css';

// eslint-disable-next-line react/prop-types
function Pagination({ mediaPerPage, totalMedia, paginate }) {
  const pageNumbers = [];
  const maxPage = Math.ceil(totalMedia / mediaPerPage);

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(totalMedia / mediaPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="Pagination">
      {
        pageNumbers.map((number) => (
          <button type="button" className="page-link" onClick={() => paginate(number)}>
            {number}
          </button>
        ))
        }
    </div>
  );
}

export default Pagination;
