'use strict';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
        {
          campuses.map(campus => {
            return (
              <div key={campus.id} className="col-xs-3">
                <Link to={`/campuses/${campus.id}`} className="thumbnail" href="#">
                  <img src={campus.photo} />
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
