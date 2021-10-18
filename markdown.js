// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

//create a function that accepts all inquier answers from users, this function will return a template fullly formated readme.


function generateMarkdown(response){
    return `
    #Title

     ${ response.title}


##Table Of Content

    Description

    license

    Dependencies
  

##Description
${response.description}

- i hope this works
- im building this project for class
- Testing


##license

${createBadge(response.license)}

##Dependencies



##Test

  -Testing

    npm test

##Usage
${response.usage}

##How To Contribute


 github:

  ${response.github}


email:

  ${response.email}
`   
}






function createBadge(license) {
   
    switch(license) {
        case "APACHE2.0":
            return`[![License](https://img.shields.io/badge/Lincense-Apache%202.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)`
           
          case "BOOST1.0":
            return "[![License](https://img.shields.io/badge/License-BOOST1.0-blue)](https://choosealicense.com/licenses/bsl-1.0/)"
            
          case "BSD2":
            return"[![License](https://img.shields.io/badge/License-BSD2-blue)](https://opensource.org/licenses/BSD-2-Clause)"
        
          case "BSD3":
            return"[![License](https://img.shields.io/badge/License-BSD3-blue)](https://opensource.org/licenses/BSD-3-Clause)"
           
          case "MIT":
            return"[![License](https://img.shields.io/badge/License-MIT-blue)](https://choosealicense.com/licenses/mit/)"
         
          default:
            return "no license"
          
    };
  }
  


    

module.exports = generateMarkdown;