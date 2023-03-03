// Dependencies
var inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:input,
        message:"What is your Name?",
        name:userName
    },
    {
        type:input,
        message:"What is your Name?",
        name:userName
    },
    {
        type:input,
        message:"What is your Name?",
        name:userName
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('text.txt', content, err => {
        if (err) {
          console.error(err);
        }
        
      });
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
