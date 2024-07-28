import fs from 'fs';
import inquirer from 'inquirer';
import path from 'path';
import { fileURLToPath } from 'url';
import generateMarkdown from './utils/generateMarkdown.js';

// Helper to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const questions = [ 
  {
    type: "input",
    name: "title",        
    message: "Project Name: ",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description explaining the what, why, and how of your project: ",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license for this project",
    choices: ["MIT", "APACHE2.0", "MPL2.0", "BSD2", "BOOST1.0", "BSD3", "none"],
  },
  {
    type: "input",
    name: "technologies",
    message: "List the technologies and languages used in your project: "
  },
  {
    type: "input",
    name: "dependencies",
    message: "List any project dependencies: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe how to use your project: ",
  },
  {
    type: "input",
    name: "creator",
    message: "Write your Github username: ",
  },
  {
    type: "input",
    name: "name",
    message: "State your full name: ",
  },
  {
    type: "input",
    name: "email",
    message: "Type in your e-mail address: ",
  },
  {
    type: "input",
    name: "contributors",
    message: "List any contributors. (Use Github Usernames): ",
    default: "--",
  }
];

function writeToFile(fileName, data) {
  const dir = path.dirname(fileName);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return fs.writeFileSync(fileName, data);
}

function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
  });
}

// Function call to initialize app
init();
