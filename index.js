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
		choices: [
			"None",
			"Apache 2.0",
			"GNU General Public v3.0",
			"MIT",
			"BSD 2-Clause 'Simplified'",
			"BSD 3-Clause 'New' or 'Revised'",
			"Boost Software 1.0",
			"Creative Commons Zero v1.0 Universal",
			"Eclipse Public 2.0",
			"GNU Affero General Public v3.0",
			"GNU General Public v2.0",
			"GNU Lesser General Public v2.1",
			"Mozilla Public 2.0",
			"The Unlicense",
		],
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
function writeToFile(fileName, data) {
	fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
	inquirer
		.prompt(questions)
		.then((answers) => {
			const markdown = generateMarkdown(answers);
			writeToFile("README.md", markdown);
		})
		.then(() => console.log("README file created successfully!"))
		.catch((err) => console.error(err));
}

// function call to initialize program
init();
