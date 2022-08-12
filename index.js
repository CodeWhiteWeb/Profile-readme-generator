#!/usr/bin/env node


const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Please enter your GitHub username: "
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email: "
    },
    {
      type: "input",
      name: "website",
      message: "Enter your website Url ( without https:// ): "
    },
    {
      type: "input",
      name: "work",
      message: "I’m currently working on: "
    },
    {
      type: "input",
      name: "learn",
      message: "I’m currently learning: "
    },
    {
      type: "input",
      name: "codepen",
      message: "Enter your CodePen username: "
    },
    {
      type: "input",
      name: "twitter",
      message: "Enter your Twitter username: "
    },
    {
      type: "input",
      name: "sof",
      message: "Enter your stackoverflow username: "
    },
    {
      type: "input",
      name: "insta",
      message: "Enter your Instagram username: "
    }
  ]);
}

// Async function using util.promisify 
async function init() {
  try {
    // Ask user questions and generate responses
    const answers = await promptUser();
    const generateContent = generateReadme(answers);
    // Write new README.md directory
    await writeFileAsync('README.md', generateContent);
    console.log('??  Successfully wrote to README.md');
  } catch (err) {
    console.log(err);
  }
}

init();