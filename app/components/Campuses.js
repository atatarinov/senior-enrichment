'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Campuses extends Component {
  constructor() {
    super();
    this.state = {
      campuses: []
    };
  }

  componentDidMount() {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        this.setState({ campuses });
      });
  }

  render() {
    const campuses = this.state.campuses;
    return (
      <div className="container">
        <Link to="/create-campus"
        className="btn btn-primary btn-block">
        <span className="glyphicon glyphicon-plus">
        </span>Create New Campus</Link>
        {
          campuses.map(campus => {
            return (
              <div key={campus.id} className="col-md-4" id="campus">
                <Link to={`/campuses/${campus.id}`} className="thumbnail" href="#">
                  <img src={campus.photo || 'http://www.pngall.com/wp-content/uploads/2016/07/Galaxy-Transparent.png'} />
                  <div className="caption">
                    <h3>{campus.name}</h3>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    );
  }
}



