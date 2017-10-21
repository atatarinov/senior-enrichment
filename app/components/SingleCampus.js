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
    this.removeCampus = this.removeCampus.bind(this);
  }

  componentDidMount() {
    const campusId = this.props.match.params.campusId;
    axios.get(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(campus => this.setState({selectedCampus: campus}));
  }

  removeCampus() {
    const campus = this.state.selectedCampus;
    // console.log('sellllected', id);
    axios.delete(`/api/campuses/delete`, {data: campus})
    .then(res => {
      console.log('Success!!');
    })
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
        <Link to={`/update-campus/${this.state.selectedCampus.id}`}>
          <button type="button" className="btn btn-info">Update Campus</button>
        </Link>
        <br/>
        <br/>
        <button type="button" className="btn btn-danger" onClick={this.removeCampus}>Delete Campus</button>

      </div>
    )
  }
}


