'use strict';

const db = require('../../db');
const DataTypes = db.Sequelize;

let Campus = db.define('campus', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  photo: {
    type: DataTypes.STRING
    // defaultValue: `../../src/img/${this.name}.jpeg`
  }
  //should probably be changed
});


module.exports = Campus;
