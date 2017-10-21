const db = require('../../db');
const DataTypes = db.Sequelize;

const Student = db.define('student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  }
});

// Student.prototype.getCampus = function() {
//   return db.model('campus').findAll({
//     where: {campusId: this.campusId}
//   });
// }





module.exports = Student;
