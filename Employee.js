const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('db');

class Employee extends Model { }

Employee.init(
  {
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
  },
  {
    sequelize: db,
    modelName: 'Employee',
  }
);

module.exports = Employee;
