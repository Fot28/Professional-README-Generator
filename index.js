const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of your project?",
	},
	{
		type: "input",
		name: "description",
		message: "Enter a description of your project:",
	},
	{
		type: "input",
		name: "installation",
		message: "Enter installation instructions for your project:",
	},
	{
		type: "input",
		name: "usage",
		message: "Enter usage information for your project:",
	},
	{
		type: "list",
		name: "license",
		message: "Choose a license for your application:",
		choices: ["MIT", "None"],
	},
	{
		type: "input",
		name: "contributing",
		message: "Enter contribution guidelines for your project:",
	},
	{
		type: "input",
		name: "tests",
		message: "Enter test instructions for your project:",
	},
	{
		type: "input",
		name: "github",
		message: "Enter your GitHub username:",
	},
	{
		type: "input",
		name: "email",
		message: "Enter your email address:",
	},
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
