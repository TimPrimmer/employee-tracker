const db = require('./db/connection');
const inquirer = require('inquirer');
const prompts = require("./utils/questions.js");
const cTable = require('console.table');



const displayData = (sqlrows) => {
  console.log("\n");
  console.table(sqlrows);

}

// main menu inquirer loop which returns another call to this function with a new inquirer, only exits if the user select option 3
const mainMenu = async () => {
  const answers = await inquirer.prompt(prompts.questions.menu);

  if (answers.selection.charAt(0) === "1") { // View all departments
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
      displayData(rows);
      return mainMenu();
    });
  }

  else if (answers.selection.charAt(0) === "2") { // View all roles
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, rows) => {
      displayData(rows);
      return mainMenu();
    });
  }

  else if (answers.selection.charAt(0) === "3") { // View all employees
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => {
      displayData(rows);
      return mainMenu();
    });
  }

  else if (answers.selection.charAt(0) === "4") { // Add a department
    const answers = await inquirer.prompt(prompts.questions.addDepartment);
    const sql = `INSERT INTO department (name)
    VALUES (?)`;
    const params = [answers.name];

    db.query(sql, params, (err, result) => {
      console.log(`The ${answers.name} department has now been added!`)
      prompts.gatherInfo(); // updates the questions to reflect our new info
      return mainMenu();
    });
  }

  else if (answers.selection.charAt(0) === "5") { // Add a role
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
      displayData(rows);
      return mainMenu();
    });
  }

  else if (answers.selection.charAt(0) === "6") { // Add an employee
    const answers = await inquirer.prompt(prompts.questions.addEmployee);
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?)`;
    const params = [answers.fname, answers.lname, Number(answers.role.split('.')[0]), Number(answers.manager.split('.')[0])];

    db.query(sql, params, (err, result) => {
      console.log(`Employee ${answers.fname} ${answers.lname} has now been added!`)
      prompts.gatherInfo(); // updates the questions to reflect our new info
      return mainMenu();
    });
  }

  else if (answers.selection.charAt(0) === "7") { // Update an employee role
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
      displayData(rows);
      return mainMenu();
    });
  }

  else if (answers.selection.charAt(0) === "8") { // Quit
    process.exit(0); // closes the node program
  }

};

mainMenu();