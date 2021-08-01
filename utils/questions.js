const db = require('../db/connection');
const employeeList = [];
const roleList = [];
const departmentList = [];

const getEmployees = () => {
  const sql = `SELECT * FROM employee`;
  db.query(sql, (err, rows) => {
    rows.forEach((employee) => {
      employeeList.push(`${employee.id}. ${employee.first_name} ${employee.last_name}`);
    })
  });
};

const getRoles = () => {
  const sql = `SELECT * FROM role`;
  db.query(sql, (err, rows) => {
    rows.forEach((role) => {
      roleList.push(`${role.id}. ${role.title}`);
    })
  });
};

const getDepartments = () => {
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, rows) => {
    rows.forEach((department) => {
      departmentList.push(`${department.id}. ${department.name}`);
    })
  });
};

const gatherInfo = () => {
  getEmployees();
  getRoles();
  getDepartments();
}

// questions for the main menu
const mainMenuQuestions = [
  {
    type: "list",
    name: "selection",
    message: "What would you like to do?",
    choices: [
      "1. View all departments",
      "2. View all roles",
      "3. View all employees",
      "4. Add a department",
      "5. Add a role",
      "6. Add an employee",
      "7. Update employee role",
      "8. Update employee manager",
      "9. View employees by manager",
      "10. View employees by department",
      "11. Delete department",
      "12. Delete role",
      "13. Delete employee",
      "14. View budget of department",
      "15. Quit"
    ]
  }
];

// questions for adding an employee
const addEmployeeQuestions = [
  {
    type: "input",
    name: "fname",
    message: "What is the employees first name?",
    validate(value) {
      if (!value) {
        console.log("please enter in a first name!")
        return false;
      }
      else { return true; }
    }
  },
  {
    type: "input",
    name: "lname",
    message: "What is the employees last name?",
    validate(value) {
      if (!value) {
        console.log("please enter in a last name!")
        return false;
      }
      else { return true; }
    }
  },
  {
    type: "list",
    name: "role",
    message: "What is the employees role?",
    choices: roleList
  },
  {
    type: "list",
    name: "manager",
    message: "Who is the employees manager?",
    choices: employeeList
  }
];

// questions for adding an department
const addDepartmentQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the departments name?",
    validate(value) {
      if (!value) {
        console.log("please enter in a name!")
        return false;
      }
      else { return true; }
    }
  }
];

// questions for adding an role
const addRoleQuestions = [
  {
    type: "input",
    name: "title",
    message: "What is the roles title?",
    validate(value) {
      if (!value) {
        console.log("please enter in a title!")
        return false;
      }
      else { return true; }
    }
  },
  {
    type: "input",
    name: "salary",
    message: "What is the roles salary?",
    validate(value) {
      if (!value) {
        console.log("please enter in a salary!")
        return false;
      }
      else { return true; }
    }
  },
  {
    type: "list",
    name: "department",
    message: "What department does the role belong to?",
    choices: departmentList
  }
];

// questions for update an employees role
const updateEmployeeRoleQuestions = [
  {
    type: "list",
    name: "employee",
    message: "Which employee would you like to update?",
    choices: employeeList
  },
  {
    type: "list",
    name: "role",
    message: "What role would you like them to have?",
    choices: roleList
  }
];

// questions for update an employees manager
const updateEmployeeManagerQuestions = [
  {
    type: "list",
    name: "employee",
    message: "Which employee would you like to update?",
    choices: employeeList
  },
  {
    type: "list",
    name: "manager",
    message: "Who is their manager?",
    choices: employeeList
  }
];

// run the gatherInfo function so we can get our current employees and roles for use in the questions
gatherInfo();

// questions object holding all question sets
const questions = {
  menu: mainMenuQuestions,
  addEmployee: addEmployeeQuestions,
  addDepartment: addDepartmentQuestions,
  addRole: addRoleQuestions,
  updateEmployeeRole: updateEmployeeRoleQuestions,
  updateEmployeeManager: updateEmployeeManagerQuestions
}

module.exports = { questions, gatherInfo };