const db = require('./db/connection');
const inquirer = require('inquirer');
const prompts = require("./utils/questions.js");
const queryList = require("./utils/queries.js");
const cTable = require('console.table');

const displayData = (sqlrows) => {
  console.log("\n");
  console.table(sqlrows);
}

// main menu inquirer loop which returns another call to this function with a new inquirer, only exits if the user select option 3
const mainMenu = async () => {
  const answers = await inquirer.prompt(prompts.questions.menu);
  if (answers.selection.substring(0,2) === "1.") { // View all departments
    db.query(queryList.viewAllDepartments, (err, rows) => {
      displayData(rows);
      return mainMenu();
    });
  }
  else if (answers.selection.substring(0,2) === "2.") { // View all roles
    db.query(queryList.viewAllRoles, (err, rows) => {
      displayData(rows);
      return mainMenu();
    });
  }
  else if (answers.selection.substring(0,2) === "3.") { // View all employees
    db.query(queryList.viewAllEmployees, (err, rows) => {
      displayData(rows);
      return mainMenu();
    });
  }
  else if (answers.selection.substring(0,2) === "4.") { // Add a department
    const answers = await inquirer.prompt(prompts.questions.addDepartment);
    const params = [answers.name];
    db.query(queryList.addDepartment, params, (err, result) => {
      console.log(`\nThe ${answers.name} department has now been added!\n`)
      prompts.gatherInfo(); // updates the questions to reflect our new info
      return mainMenu();
    });
  }
  else if (answers.selection.substring(0,2) === "5.") { // Add a role
    const answers = await inquirer.prompt(prompts.questions.addRole);
    const params = [answers.title, answers.salary, Number(answers.department.split('.')[0])];
    db.query(queryList.addRole, params, (err, result) => {
      console.log(`\nThe ${answers.title} role has now been added!\n`)
      prompts.gatherInfo(); // updates the questions to reflect our new info
      return mainMenu();
    });
  }
  else if (answers.selection.substring(0,2) === "6.") { // Add an employee
    const answers = await inquirer.prompt(prompts.questions.addEmployee);
    const params = [answers.fname, answers.lname, Number(answers.role.split('.')[0]), Number(answers.manager.split('.')[0])];
    db.query(queryList.addEmployee, params, (err, result) => {
      console.log(`\nEmployee ${answers.fname} ${answers.lname} has now been added!\n`)
      prompts.gatherInfo(); // updates the questions to reflect our new info
      return mainMenu();
    });
  }
  else if (answers.selection.substring(0,2) === "7.") { // Update an employees role
    const answers = await inquirer.prompt(prompts.questions.updateEmployeeRole);
    const params = [Number(answers.role.split('.')[0]), Number(answers.employee.split('.')[0])];
    db.query(queryList.updateEmployeeRole, params, (err, result) => {
      console.log(`\nEmployee${answers.employee.split('.')[1]} has now been updated!\n`)
      prompts.gatherInfo(); // updates the questions to reflect our new info
      return mainMenu();
    });
  }
  else if (answers.selection.substring(0,2) === "8.") { // Update an employees manager
    const answers = await inquirer.prompt(prompts.questions.updateEmployeeManager);
    const params = [Number(answers.manager.split('.')[0]), Number(answers.employee.split('.')[0])];
    db.query(queryList.updateEmployeeManager, params, (err, result) => {
      console.log(`\nEmployee${answers.employee.split('.')[1]} has now been updated!\n`)
      prompts.gatherInfo(); // updates the questions to reflect our new info
      return mainMenu();
    });
  }
  else if (answers.selection.substring(0,2) === "9.") { // View employees by manager
    
  }
  else if (answers.selection.substring(0,2) === "10.") { // View employees by department
  }
  else if (answers.selection.substring(0,2) === "11.") { // Delete department
  }
  else if (answers.selection.substring(0,2) === "12.") { // Delete role
  }
  else if (answers.selection.substring(0,2) === "13.") { // Delete employee
  }
  else if (answers.selection.substring(0,2) === "14.") { // View budget of department
  }
  else if (answers.selection.substring(0,2) === "15") { // Quit
    process.exit(0); // closes the node program
  }
};

mainMenu();