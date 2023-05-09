const { Sequelize, Model, DataTypes } = require('sequelize');
const express = require("express");
const app = express();
const cors = require("cors");


// middleware
app.use(cors());
app.use(express.json());

// specific routes
const sequelize = new Sequelize('crubjob', 'postgres', 'hh8284', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});

// Define the "Employees" model
const Employee = sequelize.define('Employee', {
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

// get all employees
app.get("/employees", async (req, res) => {
  try {
    const allEmployees = await Employee.findAll();
    res.json(allEmployees);
  } catch (err) {
    console.error(err.message);
  }
});

// create a new employees
app.post('/employees', async (req, res) => {
    try {
      const { employee_first_name, employee_last_name, department_name } = req.body;

      // Create a new employee using the Employee model
      const newEmployee = await Employee.create({
        employee_first_name,
        employee_last_name,
        department_name,
      });

      res.json(newEmployee);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

// listen to the server
sequelize.sync().then(() => {
  app.listen(4000, () => {
    console.log("Server has started on port 4000");
  });
});