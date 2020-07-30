const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const queryUrl = `https://api.github.com/users/Mattfava/repos:Mattfava:HW12/commits`;

    axios.get(queryUrl).then(function(res) {
      console.log(res.data[6]);
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });
    });