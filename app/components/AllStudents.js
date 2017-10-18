'use strict';
import React, { Component } from 'react';
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
        {
          students.map(student => {
            return <h4 key={student.id}>{student.name}</h4>;
          })
        }
      </div>
    );
  }
}
