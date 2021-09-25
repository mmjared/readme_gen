const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./markdown.js");

const questions = [
  {
    type: "input",
    name: "title",
    message: "name of project?",
  },
  {
    type: "input",
    name: "description",
    message: "project description",
  },
  {
    type: "list",
    name: "license",
    message: "type of license?",
    choices: ["APACHE2.0", "BOOST1.0", "BSD2", "BSD3","MIT", "NONE"],
  },
  {
    type: "input",
    name: "dependencies",
    message: "What dependencies need to be installed?",
    default: ["npm init"],
  },
  {
    type: "input",
    name: "test",
    message: "What command should be used to run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "the usage of repo:",
  },
  {
    type: "input",
    name: "contributors",
    message: "contributors of repo?",
  },
  {
    type: "input",
    name: "github",
    message: "Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "email address?",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((inquirerAnswers) => {
    writeToFile("README.md", generateMarkdown({ ...inquirerAnswers }));
  });
}

init();
