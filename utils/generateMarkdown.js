// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
const generateSample = (answers) => {
  return `# ${answers.title}

## Technologies

${answers.technologies}

## Description

${answers.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

![Landing Page View](${answers.photo})

View walkthrough video here:
${answers.walkthrough}

Deployed site can be viewed at: 
[${answers.deployed}]

Provide any instructions and/or examples for use:
${answers.usage}

## Credits

Collaborators:

${answers.collaborators}

Third party assets requiring attribution:

${answers.assets}

Tutorials or other reference material:

${answers.tutorials}

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

${answers.features}

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

${answers.tests}

## Questions

My GitHub profile can be viewed at https://github.com/${answers.github} 
Please send questions via email: ${answers.email}`







};



module.exports = generateSample;
