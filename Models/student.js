const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Student = sequelize.define(
  'Student',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    school: {
      type: DataTypes.STRING,
      defaultValue: "Hackademia",
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
);

module.exports = Student;
