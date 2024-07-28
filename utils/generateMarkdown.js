// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License

Licensed under the ${license} license.`;
  }
  return "";
}

function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Technologies](#technologies)
* [Dependencies](#dependencies)
* [Usage](#usage)
* [Contact-Me](#contact-me)
* [Contributors](#contributors)${renderLicenseLink(data.license)}
## Description
${data.description}
## Technologies
${data.technologies}
## Dependencies
${data.dependencies}
## Usage
${data.usage}
## Contact-me
* Name - ${data.name}
* Email - ${data.email}
* Github - [${data.creator}](https://github.com/${data.creator})
## Contributors
${data.contributors}
${renderLicenseSection(data.license)}`;
}

export default generateMarkdown;
