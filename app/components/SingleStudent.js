'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleStudent extends Component {
  constructor() {
    super();
    this.state = {
      selectedStudent: {},
      selectedCampus: {}
    };
    this.removeStudent = this.removeStudent.bind(this);
  }

  componentDidMount() {
    const studentId = this.props.match.params.studentId;
    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
        this.setState({ selectedStudent: student })
        this.setState({ selectedCampus: student.campus });
      })
  }

  removeStudent() {
    const student = this.state.selectedStudent;
    console.log('sellllected', student);
    axios.delete(`/api/students/delete`, { data: student })
      .then(res => {
        console.log('Success!!');
      })
  }

  render() {
    const student = this.state.selectedStudent;
    let campusName = '';
    if (student.campus) {
      campusName = student.campus.name;
    }
    console.log('SELECTED STUDENT', student);
    return (
      <div className="album col-xs-4">
        <h3>Student's Name: {student.name}</h3>
        <h4>Student's Email: {student.email}</h4>
        <h4>Student's Campus: <Link to={`/campuses/${student.campusId}`}>{campusName}</Link></h4>

        <Link to={`/update-student/${this.state.selectedStudent.id}`}>
          <button type="button" className="btn btn-info">Update Student</button>
        </Link>
        <br/>
        <br/>
        <button type="button" className="btn btn-danger" onClick={this.removeStudent}>Delete Student</button>
      </div>
    )
  }
}
