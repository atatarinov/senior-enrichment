'use strict';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Campuses from './Campuses';
import AllStudents from './AllStudents';
import Navbar from './Navbar';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import CreateCampus from './CreateCampus';
import CreateStudent from './CreateStudent';
import UpdateCampus from './UpdateCampus';
import UpdateStudent from './UpdateStudent';


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
        <Route exact path="/create-campus" component={CreateCampus} />
        <Route exact path="/create-student" component={CreateStudent} />
        <Route exact path="/update-campus/:id" component={UpdateCampus} />
        <Route exact path="/update-student/:id" component={UpdateStudent} />

      </div>
    );
  }
}

