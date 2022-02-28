// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your application? (Required)",
        name: "title",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter title of your application.");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "Please provide a description of your application. What was your motivation?  Why did you build this project?  What problem does it solve?  What did you learn?",
        name: "description",
        default: "No description given."
    },
    {
        type: "checkbox",
        message: "Which of the following were utilized - choose all that apply?",
        name: "technologies",
        choices: [" HTML", " CSS", " GIT", " Bootstrap", " Heroku", " Javascript", " JQuery", " AJAX", " NodeJS", " ReactJS", " Python", " Pandas"],
        default: "No technologies provided."
    },
    {
        type: "input",
        message: "What are the steps required of the user to install your project?",
        name: "installation",
        default: "No installation instructions given."
    },
    {
        type: "input",
        message: "Enter the path of the file containing your landing page screen shot or image. ex., /assets/images/page.png",
        name: "photo",
        default: "No screenshot provided."
    },
    {
        type: "input",
        message: "Enter url of any walkthrough video detailing the functionality of your application.",
        name: "walkthrough",
        default: "No video provided."
    },
    {
        type: "input",
        message: "Enter the url for the deployed site. ex., https://username.github.io/application-name/",
        name: "deployed",
        default: "No deployed link provided."
    },
    {
        type: "input",
        message: "Provide any instructions and/or examples for use.",
        name: "usage",
        default: "No instructions or examples provided."
    },
    {
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub pages.",
        name: "collaborators",
        default: "Repo owner is sole contributor."
    },
    {
        type: "input",
        message: "If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.",
        name: "assets",
        default: "No third-party assets utilized."
    },
    {
        type: "input",
        message: "If you followed tutorials, include links here.",
        name: "tutorials",
        default: "No links provided."
    },
    {
        type: "list",
        name: "license",
        message: "Choose your license:",
        choices: ["None", "Apache", "BSD 3-Clause", "BSD 2-Clause", "GNU General Public License", "GNU Library General Public License", "MIT", "Mozilla", "Common Development and Distribution License", "Eclipse Public License", "Other"],
    },
    {
        type: "input",
        message: "If your project has a lot of features, list them here.",
        name: "features",
        default: "No additional features provided."
    },
    {
        type: "input",
        message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.",
        name: "contributing",
        default: "No information on contributions has been provided."
    },
    {
        type: "input",
        message: "If you created tests for your application, provide examples on how to run them here.",
        name: "tests",
        default: "No test information provided."
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
        default: "No github username provided."
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        default: "No email address provided."
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
