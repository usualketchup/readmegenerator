function generateMarkdown(answers, apiData) {
  return ` ![npm](https://img.shields.io/badge/npm-v6.13.4-blue)

# ${answers.project}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
${answers.license}

## Questions

Github: [${apiData.data.html_url}](https://github.com/usualketchup)
![GitHub Profile Image:](${apiData.data.avatar_url})
Email: ${apiData.data.email}
`;
}

module.exports = generateMarkdown;
