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
  }

  componentDidMount() {
    const studentId = this.props.match.params.studentId;
    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
        this.setState({selectedStudent: student})
        this.setState({selectedCampus: student.campus});
      })

    // const studentCampus = axios(`/campuses/${}`)
    // const getStudentsCampus = axios.get(`api/students/${studentId}/campuses`);
    // Promise.all([getStudent, getStudentsCampus])
    //   .then(resArray => resArray.map(res => res.data))
    //   .then(studentArr => {
    //     let campusId = studentArr[0].campusId;
    //     console.log(studentArr);

  }

  render() {
    const student = this.state.selectedStudent;
    let campusName = '';
    if (student.campus) {
      campusName = student.campus.name;
    }
    // console.log('*******', student);
    return (
      <div className="album col-xs-4">
        <h3>Student's Name: {student.name}</h3>
        <h4>Student's Email: {student.email}</h4>
        <h4>Student's Campus: <Link to={`/campuses/${student.campusId}`}>{campusName}</Link></h4>
      </div>
    )
  }
}
