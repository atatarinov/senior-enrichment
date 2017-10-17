const db = require('../../db');
const DataTypes = db.Sequelize;

let Student = db.define('student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Student;
