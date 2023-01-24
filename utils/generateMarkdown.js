function renderLicenseBadge(license) {
  return `![${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
}

function renderLicenseLink(license) {
  return `(https://opensource.org/licenses/${license})`
}

function renderLicenseSection(license) {
  return `
## License
This project is licensed by ${license}`
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
## Description:
  ${data.description}

## Table of content:
1. [Installation](#installation)
2. [Usage](#usage)
3. [Credits](#credits)
4. [License](#license)
5. [Username](#username)
6. [Email](#email)

## Installation:
  ${data.installation}

## Usage:
  ${data.usage}

## Credits:
  ${data.contribution}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Username:
  ${data.username}

## Email:
  ${data.email}

`;
}

module.exports = generateMarkdown;
