import React from 'react';
import { Link } from 'react-router-dom';
import  './nav.css';

let Nav = () => {
  return (
    <div className="container-fluid nav1 d-flex">

      <div className='container'>
          <h1>⭐ MyRateStore</h1>
      </div>
      <div className="container d-flex justify-content-end">
          <ul className="nav">

        <li className="nav-item">
          <Link to="/" >Home </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" >Login</Link>
        </li>
      </ul>
      </div>

    </div>
  );
};

export default Nav;
