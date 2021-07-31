const db = require('../db/connection');
const employeeList = [];
const roleList = [];

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

const gatherInfo = () => {
  getEmployees();
  getRoles();
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
      "7. Update an employee role",
      "8. Quit"
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

// run the gatherInfo function so we can get our current employees and roles for use in the questions
gatherInfo();

// questions object holding all question sets
const questions = {
  menu: mainMenuQuestions,
  addEmployee: addEmployeeQuestions
}

module.exports = {questions, gatherInfo};