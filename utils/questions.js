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

// questions object holding all question sets
const questions = {
  menu: mainMenuQuestions
}

module.exports = questions;