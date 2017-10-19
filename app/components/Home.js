'use strict';
import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Campuses from './Campuses';
import AllStudents from './AllStudents';
import Navbar from './Navbar';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';


export default class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <Navbar />
        <Route exact path="/" component={Campuses} />
        <Route exact path="/campuses" component={Campuses} />
        <Route path="/campuses/:campusId" component={SingleCampus} />
        <Route exact path="/students" component={AllStudents} />
        <Route path="/students/:studentId" component={SingleStudent} />

      </div>
    );
  }
}

