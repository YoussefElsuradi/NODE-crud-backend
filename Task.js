const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('db');
const Employee = require('Employee');

class Task extends Model { }

Task.init(
  {
    assigned_to: {
      type: DataTypes.INTEGER,
      references: {
        model: Employee,
        key: 'id',
      },
    },
    description: DataTypes.STRING,
    priority_level: DataTypes.INTEGER,
    completion_status: DataTypes.BOOLEAN,
  },
  {
    sequelize: db,
    modelName: 'Task',
  }
);

module.exports = Task;
