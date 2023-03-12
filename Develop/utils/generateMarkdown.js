
function renderLicenseBadge(license) {

}

function renderLicenseLink(license) {

}


function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title},
  ## ${'Description'} 
  ${data.description},
  ## ${'Usage'} 
  ${data.usage},
  ## ${'contributing'} 
  ${data.contributing},
  ## ${'Instrucition'} 
   ${data.instrucition},
  ## ${'License'}
  ${data.license}
  ## ${'GitHub Profile'} 
   ${data.userName},
  ## ${'Email'} 
   ${data.email},

`;
}

module.exports = generateMarkdown;
