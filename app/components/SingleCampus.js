'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleAlbum extends Component {
  constructor() {
    super();
    this.state = {
      selectedCampus: {}
    };
  }

  componentDidMount() {
    const campusId = this.props.match.params.campusId;
    axios.get(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(campus => this.setState({selectedCampus: campus}));
  }

  render() {
    const campus = this.state.selectedCampus;
    let studentNames = [];
    if (campus.students) {
      for (let i = 0; i < campus.students.length; i++) {
        studentNames.push(campus.students[i]);
      }
    }
    return (
      <div className="album col-xs-4">
        <div>
          <h3>{campus.name} Campus</h3>
          <img className="campusImg" src={campus.photo}
            className="img-thumbnail" />
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th>Student Name</th>
              <th>Student Email</th>
            </tr>
          </thead>
          <tbody>
            {
              // map over the students that belong to a selected campus
              studentNames.map((student, index) => {
                return (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

