// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your application?",
        name: "title"
    },
    {
        type: "checkbox",
        message: "Which of the following were utilized - choose all that apply?",
        name: "technologies",
        choices: ["HTML", "CSS", "GIT", "Bootstrap", "Heroku", "Javascript", "JQuery", "AJAX", "NodeJS", "ReactJS", "Python", "Pandas"]
    },
    {
        type: "input",
        message: "Please provide a description of your application. What was your motivation?  Why did you build this project?  What problem does it solve?  What did you learn?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required of the user to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter the path of the file containing your landing page screen shot or image. ex., /assets/images/page.png",
        name: "photo"
    },
    {
        type: "input",
        message: "Enter url of any walkthrough video detailing the functionality of your application.",
        name: "walkthrough"
    },
    {
        type: "input",
        message: "Enter the url for the deployed site. ex., https://username.github.io/application-name/",
        name: "deployed"
    },
    {
        type: "input",
        message: "Provide any instructions and/or examples for use.",
        name: "usage"
    },
    {
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub pages.",
        name: "collaborators"
    },
    {
        type: "input",
        message: "If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.",
        name: "assets"
    },
    {
        type: "input",
        message: "If you followed tutorials, include links here.",
        name: "tutorials"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)

        .then((answers) => {
            console.log(answers)

            const template = generateMarkdown(answers)

            console.log(template);

            fs.writeFile("./output/README.md", template, () => {
                console.log('File successfully written to README.md!')
            })
        })
}

// Function call to initialize app
init();
