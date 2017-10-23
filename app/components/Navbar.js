'use strict';
import React from 'react';
import { Link } from 'react-router-dom';

export default () => {

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/campuses" className="navbar-brand">Margaret Hamilton Interplanetary Academy of JavaScript</Link>
        </div>
        <div>
          <ul className="nav navbar-nav">
            <li className="active" id="home"><Link to="/campuses">Home</Link></li>
            <li><Link to="/students">Students</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}






