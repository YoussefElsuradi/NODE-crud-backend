const express = require('express');
const router = express.Router();


// Create a new employee
router.post('/', ash(async (req, res) => {
    try {
        const { employee_first_name, employee_last_name, department_name } = req.body;

        // Create a new employee using the Employee model
        const newEmployee = await Employee.create({
            employee_first_name,
            employee_last_name,
            department_name,
        });

        res.status(201).json(newEmployee);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}));

// Get all employees
router.get('/', ash( async (req, res) => {
    try {
        const allEmployees = await Employee.findAll();
        res.status(201).json(allEmployees);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error' });
    }
}));

// Get employee by ID
router.get('/:id', ash( async (req, res) => {
    try {
      const oneEmployee = await Employee.findByPk(req.params.id);
      res.status(201).json(oneEmployee);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Server error' });
    }
  }));

// Update an employee by ID
router.put('/:id', ash( async (req, res) => {
    try {
        const { id } = req.params;
        const { employee_first_name, employee_last_name, department_name } = req.body;

        // Find the employee by ID
        const employee = await Employee.findByPk(id);

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        // Update the employee's properties
        employee.employee_first_name = employee_first_name;
        employee.employee_last_name = employee_last_name;
        employee.department_name = department_name;

        // Save the updated employee
        await employee.save();

        res.status(201).json('Employee was updated!');
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error' });
    }
}));

// Delete an employee by ID
router.delete('/:id', ash(async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findByPk(id);

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        await employee.destroy();
        res.status(201).json('Employee was deleted!');
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error' });
    }
}));

module.exports = router;