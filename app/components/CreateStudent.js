'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      campusId: undefined

    }
    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleCampus = this.handleCampus.bind(this);
  }

  handleName(event) {
    this.setState({name: event.target.value});
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handleCampus(event) {
    this.setState({campusId: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    axios.post('api/students/create', this.state)
      .then(student => {
        console.log('Success!!', student);
      })
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Student Name: </label>
            <input type="text" name="studentName" onChange={this.handleName} />
          </div>
          <br />
          <div>
            <label>Student Email: </label>
            <input type="text" name="studentEmail" onChange={this.handleEmail} />
          </div>
          <br />
          <div>
            <label>Campus ID: </label>
            <input type="text" name="campusIs" onChange={this.handleCampus}/>
          </div>
          <button type="submit" id="campus-submit" >Submit</button>
        </form>
      </div>
    )
  }
}
