'use strict';
import React from 'react';
import axios from 'axios';

export default (props) => {
  const campuses = props.campuses;
  return (
    <div>
      {
        campuses.map(campus => {
          return (
            <div key={campus.id} className="col-xs-3">
              <a onClick={() => {props.selectCampus(campus)}} className="thumbnail" href="#">
                <img src={campus.photo} />
                <div className="caption">
                  <h3>{campus.name}</h3>
                </div>
              </a>
            </div>
          )
        })
      }
    </div>
  );
};
