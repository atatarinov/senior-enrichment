'use strict';
import React from 'react';

export default (props) => {
  const campus = props.campus;
  console.log('single campus', campus);
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

        }
          <tr>
            <td>

            </td>
            <td>I SHOULD BE A STUDENT NAME</td>
            <td>I SHOULD BE A STRING OF THIS SONG'S ARTISTS</td>
          </tr>
        </tbody>
      </table>
    </div>
  )

}


// <table>
// <tr>
//   <th>Firstname</th>
//   <th>Lastname</th>
//   <th>Age</th>
// </tr>
// <tr>
//   <td>Jill</td>
//   <td>Smith</td>
//   <td>50</td>
// </tr>
// <tr>
//   <td>Eve</td>
//   <td>Jackson</td>
//   <td>94</td>
// </tr>
// </table>
