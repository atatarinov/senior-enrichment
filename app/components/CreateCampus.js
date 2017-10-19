'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      photo: null
    }
    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.name)
    axios.post('api/campuses/create', this.state)
      .then(campus => {
        console.log('Success!!', campus);
      })
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Campus Name: </label>
            <input type="text" name="campusName" onChange={this.handleName} />
          </div>
          <br />
          <div>
            <label>Campus Photo: </label>
            <input type="text" name="campus" />
          </div>
          <button type="submit" id="campus-submit" >Submit</button>
        </form>
      </div>
    )
  }

}

