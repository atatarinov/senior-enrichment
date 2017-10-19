'use strict';

const db = require('../../db');
const DataTypes = db.Sequelize;

const Campus = db.define('campus', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  photo: {
    type: DataTypes.STRING
  }
});

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

module.exports = Campus;
