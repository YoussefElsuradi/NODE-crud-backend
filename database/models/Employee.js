const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Employee = db.define('Employee', {
  employee_first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  employee_last_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  department_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Employee;