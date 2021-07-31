const db = require('./db/connection');
const inquirer = require('inquirer');
const questions = require("./utils/questions.js");
const cTable = require('console.table');



const displayData = (sqlrows) => {
  console.clear();
  console.table(sqlrows);
  for (let x = 0; x < sqlrows.length; x++) {
    console.log("\n");
  }
}

// main menu inquirer loop which returns another call to this function with a new inquirer, only exits if the user select option 3
const mainMenu = async () => {
  const answers = await inquirer.prompt(questions.menu);

  if (answers.selection.charAt(0) === "1") {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
      displayData(rows);
    });
  }

  else if (answers.selection.charAt(0) === "8") {
    process.exit(0); // closes the node program
  }

  return mainMenu();
};

mainMenu();