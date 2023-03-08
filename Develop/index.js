// Dependencies
var inquirer = require('inquirer');
const markDown = require ("./utils/generateMarkdown")
const fs = require('fs');
console.log(markDown)
// const markDown = require ('generateMarkdown.js');
// const { title } = require('process');
// TODO: Create an array of questions for user input
const questions = [
   
    {
        type:"input",
        message:"What is the title of project?",
        name:"title"
    },
    {
        type:"input",
        message:"Project Description?",
        name:"description"
    },
    {
        type:"input",
        message:"Installation Instrucition?",
        name:"instruction"
    },
    {
        type:"input",
        message:"Usage information?",
        name:"usage"
    },
    {
        type:"input",
        message:"Contributing",
        name:"contributing"
    },

    {
        type:"input",
        message:"Installation Instrucition?",
        name:"test"
    },
    {
        type:"list",
        message:"License Type?",
        name:"license",
        choices:['Academic Free License v3.0','MIT','ISC','The Unlicense']

    },
    {
        type:"input",
        message:"Github Username?",
        name:"userName"
    },
    {
        type:"input",
        message:"Email",
        name:"email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //filename = reademe.md / index.html
    fs.writeFile(fileName, data,'utf-8', err => {
        if (err) {
          console.error(err);
        }
        console.log("your file has been created")
      });
}

// TODO: Create a function to initialize app
//User Interaction

function init() {
    inquirer.prompt(questions)
    .then((response) =>{
        console.log(response)
        let templateData = markDown(response)
        console.log(templateData)
        writeToFile("readme.md", templateData);
    }   
    )

}

// Function call to initialize app
init();
