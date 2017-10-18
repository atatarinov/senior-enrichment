'use strict';
import React from 'react';

export default (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand">Margaret Hamilton Interplanetary Academy of JavaScript</a>
        </div>
        <div>
          <ul className="nav navbar-nav">
            <li onClick={props.home} className="active" id="home"><a href="#">Home</a></li>
            <li><a href="#" id="students">Students</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}






