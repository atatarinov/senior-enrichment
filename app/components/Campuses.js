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
      <div>
        <Link to="/create-campus">
          <button id="create-campus">Create New Campus</button>
        </Link>
        {
          campuses.map(campus => {
            return (
              <div key={campus.id} className="col-xs-3">
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
