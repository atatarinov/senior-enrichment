'use strict';
const db = require('../../db');
const Campus = require('./campus');
const Student = require('./student');



// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is required everywhere

// This is also probably a good place for you to set up your associations

Student.belongsTo(Campus);
Campus.hasMany(Student, {onDelete: 'cascade'});


// Campus.create({
//   name: 'Luna',
//   photo: `https://vignette.wikia.nocookie.net/warhammer40k/images/4/42/Luna.jpg/revision/latest/scale-to-width-down/620?cb=20110825142346`
// });

// Campus.create({
//   name: 'Terra',
//   photo: `http://zdnet2.cbsistatic.com/hub/i/r/2013/10/18/0d831361-37cd-11e3-90a0-0291187ef9b6/resize/620x/96a8dee019a6397d3e6079210b9f8f47/earth-nasa-wiki1.jpg`
// });

// Campus.create({
//   name: 'Mars',
//   photo: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg`
// });

// Campus.create({
//   name: 'Titan',
//   photo: `https://www.nasa.gov/images/content/67887main_pia06139_detail.jpg`
// });





module.exports = {
	Campus, Student
};
