'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class getAllStudents extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        this.setState({ students });
      });
  }

  render() {
    const students = this.state.students;
    return (
      <div className="col-xs-10">
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th>Student Name</th>
              <th>Student Campus</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map((student, index) => {
                return (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td><Link to={`students/${student.id}`}>{student.name}</Link></td>
                    <td><Link to={`campuses/${student.campusId}`}>{student.campus.name}</Link></td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}


