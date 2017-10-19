'use strict';
import React, { Component } from 'react';
import axios from 'axios';

export default class SingleStudent extends Component {
  constructor() {
    super();
    this.state = {
      selectedStudent: {}
    };
  }

  componentDidMount() {
    const studentId = this.props.match.params.studentId;
    const getStudent = axios(`/api/students/${studentId}`);
    const getStudentsCampus = axios(`api/students/${studentId}/campuses`);
    Promise.all([getStudent, getStudentsCampus])
      .then(resArray => resArray.map(res => res.data))
      .then(studentArr => {
        console.log(studentArr);
      })
  }

  render() {
    console.log(this.state.selectedStudent);
    const student = this.state.selectedStudent;
    return (
      <div className="album col-xs-4">
        <h3>Student's Name: {student.name}</h3>
        <h4>Student's Email: {student.email}</h4>
        <h4>Student's Campus: {student.campusId}</h4>
      </div>
    )
  }
}
