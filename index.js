const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

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
        message: 'Installation instructions:',
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
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'MPL-2.0', 'ISC'],
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
    
];


function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (error) =>
  error ? console.error(error) : console.log(data)
    );
};
    

function init() {
    inquirer.prompt(questions)

    .then(function (userInput){
        writeToFile("Sample-README.md", generateMarkdown(userInput))
    })
}

init();
