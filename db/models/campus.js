'use strict';

const db = require('../../db');
const DataTypes = db.Sequelize;

let Campus = db.define('campus', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.VIRTUAL,
    get: function () {
      return `../../src/img/${this.name}.jpeg`;
    }
  }
  //should probably be changed
});


module.exports = Campus;
