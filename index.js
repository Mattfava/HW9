const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
inquirer
  .prompt([{
    message: "Enter your GitHub username:",
    name: "username"
  },
  {
    message: "Enter the title of your project",
    name: "title"
  },
  {
    message: "Enter the project description",
    name:"description"
  },
  {
    message: "Enter the project Table of contents",
    name:"table"
  },
  {
    message: "Enter the project installation",
    name:"install"
  },
  {
    message: "Enter the project usage",
    name:"usage"
  },
  {
    type:"list",
    message: "Enter the project license",
    name:"license",
    choices:["APACHE","MIT","BSD 3","GPL 3.0"]
  },
  {
    message: "Enter the project contributions",
    name:"contribution"
  },
  {
    message: "Enter the project tests",
    name:"test"
  },
  {
    message: "Enter the project questions",
    name:"question"
  },
  {
    message:"Enter your email",
    name:"email"
  }
])
  .then(function(answers) {
      var title = answers.title;
      var userEmail = "\n ###Email \n"+answers.email+"\n";
      var userName = "\n"+answers.username+"\n";
      var userDescription = "\n ###Project Description \n" +answers.description+"\n";
      var userTableOfContents = "\n ###Table of contents \n"+answers.table+"\n";
      var userInstall = "\n ###Installation process \n" +answers.install+"\n";
      var userUsage = "\n ###Project usage \n"+answers.usage+"\n";
      var userLicense = "\n ###License \n"+answers.license+"\n";
      var userContributions = "\n ###Contributions \n" +answers.contribution+"\n";
      var userTest = "\n ###Tests \n"+answers.test+"\n";
      var userQuestions = "\n ###Questions \n"+answers.question+"\n";

      fs.appendFile("README.md", title, function(err) {
        if (err) {
          throw err;
        }
    });
    fs.appendFile("README.md", userName, function(err) {
      if (err) {
        throw err;
      }
  });
  fs.appendFile("README.md", userEmail, function(err) {
    if (err) {
      throw err;
    }
});
  fs.appendFile("README.md", userDescription, function(err) {
    if (err) {
      throw err;
    }
});
fs.appendFile("README.md", userTableOfContents, function(err) {
  if (err) {
    throw err;
  }
});
fs.appendFile("README.md", userUsage, function(err) {
  if (err) {
    throw err;
  }
});
fs.appendFile("README.md", userInstall, function(err) {
  if (err) {
    throw err;
  }
});
fs.appendFile("README.md", userLicense, function(err) {
  if (err) {
    throw err;
  }
});
fs.appendFile("README.md", userContributions, function(err) {
  if (err) {
    throw err;
  }
});
fs.appendFile("README.md", userTest, function(err) {
  if (err) {
    throw err;
  }
});
fs.appendFile("README.md", userQuestions, function(err) {
  if (err) {
    throw err;
  }
});
  })      
