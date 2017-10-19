'use strict';
import React, { Component } from 'react';
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
    console.log(this.state.selectedCampus);
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
              //map over the students that belong to a selected campus
            }
            <tr>
              <td></td>
              <td>I SHOULD BE A STUDENT NAME</td>
              <td>I SHOULD BE A STRING OF THIS SONG'S ARTISTS</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

