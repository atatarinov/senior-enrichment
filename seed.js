// 'use strict';

// const chance = require('chance')(123);
// const toonAvatar = require('cartoon-avatar');
// const Promise = require('bluebird');

// const db = require('./db');
// const Student = require('./db/models');

// const numStudent = 20;


// const emails = chance.unique(chance.email, numStudent);

// function doTimes (n, fn) {
//   let results = [];
//   while (n--) {
//     results.push(fn());
//   }
//   return results;
// }

// function randStudent () {
//   let gender = chance.gender();
//   return Student.build({
//     name: [chance.first({gender: gender}), chance.last()].join(' '),
//     email: emails.pop()
//   });
// }

// function generateStudents () {
//   let students = doTimes(numStudent, randStudent);
//   students.push(Student.build({
//     name: 'Zeke Nierenberg',
//     email: 'zeke@zeke.zeke'
//   }));
//   students.push(Student.build({
//     name: 'Omri Bernstein',
//     email: 'omri@zeke.zeke'
//   }));
//   return students;
// }

// function createStudent () {
//   return Promise.map(generateStudents(), function (student) {
//     return student.save();
//   });
// }

// function seed () {
//   return createStudent();
// }

// console.log('Syncing database');

// db.sync({force: true})
// .then(function () {
//   console.log('Seeding database');
//   return seed();
// })
// .then(function () {
//   console.log('Seeding successful');
// }, function (err) {
//   console.error('Error while seeding');
//   console.error(err.stack);
// })
// .finally(function () {
//   db.close();
//   return null;
// });




//+=====================================
// <div className="col-xs-6">
// <h3>Students</h3>
// <div className="list-group">
//   {
//     students.map(student => {
//       return (
//         <div className="list-group-item" key={student.id}>
//           <Link to="">{student.name}</Link>
//         </div>
//       )
//     })
//   }

// </div>
// </div>
