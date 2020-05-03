const inquirer = require('inquirer');
const fs = require('fs');
const api = require('./utils/api');
const generateMarkdown = require('./utils/generateMarkdown');


inquirer.prompt([
  {
    type: "input",
    name: "username",
    message: "What is your Github username?"
  },
  {
    type: "input",
    name: "project",
    message: "What is the name of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Please type a description of your project"
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?"
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?"
  },
  {
    type: "input",
    name: "contributing",
    message: "How does the user contribute to the repo?"
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?"
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  }
]).then(answers => {
  console.log(answers);
  api.getUser(answers.username, function (apiData) {
    writeToFile("README.md", answers, apiData);
  })
}).catch(err => {
  throw err;
});

function writeToFile(fileName, answers, apiData) {
  fs.writeFile(fileName, generateMarkdown(answers, apiData), err => {
    if (err) {
      throw err
    } else {
      console.log("Successful creation of README.md!")
    }
  })
};