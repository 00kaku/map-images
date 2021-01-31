import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="navbar navbar-bg-light fixed-top ">
      <ul className="navbar-nav ">
        <li className="nav-item dropdown">
        <a className="btn btn-secondary dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Pages
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        {pageNumbers.map(number => (
          
            <a onClick={() => paginate(number)} className='page-link'>
              {number}
            </a>
        ))}
        </div>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;