const db = require('../../db');
const DataTypes = db.Sequelize;

const Student = db.define('student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Student.prototype.getCampus = function() {
  return db.model('campus').findAll({
    where: {studentId: this.id},
    include: [{
      model: db.model('song'),
    }]
  });
}




module.exports = Student;
