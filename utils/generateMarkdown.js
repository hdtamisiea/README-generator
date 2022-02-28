// TODO: Create a function to generate markdown for README
const generateSample = (answers) => {
  return `# ${answers.title}        
  
  [![License](https://img.shields.io/badge/License-${answers.license}%20-blue.svg)](https://opensource.org/licenses/${answers.license})

## Technologies

${answers.technologies}

## Description

${answers.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
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

[${answers.license}](https://opensource.org/licenses)<br>

Click above to view terms and conditions of all open source licenses.

## Features

${answers.features}

## How to Contribute

If contributions are welcome, instructions will be listed here: 
${answers.contributing}

## Tests

${answers.tests}

## Questions

My GitHub profile can be viewed at https://github.com/${answers.github} 

Please send questions via email: ${answers.email}`
};

module.exports = generateSample;
