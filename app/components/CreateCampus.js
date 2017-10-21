'use strict';
import React, { Component } from 'react';
import axios from 'axios';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      photo: undefined
    }
    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
  }

  handleName(event) {
    this.setState({name: event.target.value});
  }

  handlePhoto(event) {
    this.setState({photo: event.target.value});
  }

  handleSubmit(event) {
    // event.preventDefault();
    axios.post('/api/campuses/create', this.state)
      .then(campus => {
      })
  }

  render() {

    return (
      <div className="well">
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>New Campus</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Campus Name</label>
            <div className="col-xs-4">
              <input className="form-control" type="text" onChange={this.handleName} />
            </div>
          </div>
          <div className="form-group">
          <label className="col-xs-2 control-label">Campus Photo</label>
          <div className="col-xs-4">
            <input className="form-control" type="text" onChange={this.handlePhoto} />
          </div>
        </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success">Create Campus</button>
            </div>
          </div>
        </fieldset>
      </form>
      </div>

    )
  }

}
