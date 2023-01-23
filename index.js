// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide project description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution credit:',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Choose a license:',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
    {
        type: 'input',
        name: 'content',
        message: 'Table of content:',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (error) =>
  error ? console.error(error) : console.log(data)
    );
};
    
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)

    .then(function (userInput){
        writeToFile("readme.md", generateMarkdown(userInput))
    })
}

// Function call to initialize app
init();
