// Dependencies
var inquirer = require('inquirer');
const markDown = require("./utils/generateMarkdown")
const fs = require('fs');

const { title } = require('process');
//Array of questions for user input
const questions = [

    {
        type: "input",
        message: "What is the title of project?",
        name: "title"
    },
    {
        type: "input",
        message: "Enter Project Description?",
        name: "description"
    },
    {
        type: "input",
        message: "Enter Usage information?",
        name: "usage"
    },
    {
        type: "input",
        message: "How  others can Contribute?",
        name: "contributing"
    },

    {
        type: "input",
        message: "Enter Installation Instrucition?",
        name: "instrucition"
    },
    {
        type: "list",
        message: "License Type?",
        name: "license",
        choices: ['Academic Free License v3.0', 'MIT', 'The Unlicense']

    },
    {
        type: "input",
        message: "what is your Github Username?",
        name: "userName"
    },
    {
        type: "input",
        message: "what is your Email Addres",
        name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf-8', err => {
        if (err) {
            console.error(err);
        }
        console.log("Your file has been created")
    });
}


//User Interaction

function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response)
            let templateData = markDown(response)
            console.log(templateData)
            writeToFile("readme.md", templateData);
        }
        )

}

// Function call to initialize app
init();
