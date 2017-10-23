'use strict';
import React, { Component } from 'react';
import axios from 'axios';


export default class extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      email: '',
      campusId: ''
    }
    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleCampus = this.handleCampus.bind(this);
  }

  componentDidMount() {
    const studentId = this.props.match.params.id;
    console.log(studentId);
    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
        console.log('current student', student)
        this.setState({
          id: student.id,
          name: student.name,
          email: student.email,
          campusId: student.campusId
        })
      })
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleCampus(event) {
    this.setState({ campusId: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.put('/api/students/update', this.state)
      .then(student => {
        alert('Student Updated');
      })
  }

  render() {

    return (
      <div className="well">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Update Student</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">New Student Name</label>
              <div className="col-xs-4">
                <input className="form-control" type="text" placeholder="Enter student name" onChange={this.handleName} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">New Student Email</label>
              <div className="col-xs-4">
                <input className="form-control" type="text" placeholder="Enter student email" onChange={this.handleEmail} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">New Student Campus ID</label>
              <div className="col-xs-4">
                <input className="form-control" type="text" placeholder="Enter student campus" onChange={this.handleCampus} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success">Update Student</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
