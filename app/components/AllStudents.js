'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      id: undefined
    };
    this.removeStudent = this.removeStudent.bind(this);
  }

  componentDidMount() {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        this.setState({ students });
      });
  }

  removeStudent(id) {
    // preventDefault();
    console.log(id)
    // this.setState({ id })
    // axios.delete(`api/students/delete`, this.state)
    //   .then(campus => {
    //     console.log('Success!!', campus);
    //   })
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
                    <td><Link to={`students/${student.id}`}>{student.name}</Link>
                    <form onSubmit={() => this.removeStudent(student.id)}><button type="submit" className="btn btn-danger btn-xs" id="student-delete">Delete</button></form></td>
                    <td><Link to={`campuses/${student.campusId}`}>{student.campus.name}</Link></td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <Link to="/create-student" className="btn btn-primary btn-block">
          <span className="glyphicon glyphicon-plus"></span>Create New Student
        </Link>
      </div>
    );
  }
}


