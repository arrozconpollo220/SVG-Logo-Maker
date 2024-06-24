// Node Packages
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes')

// Created an array for user input
const Questions = [
    {
        type: "input",
        message: "Please enter your message up to 3 characters long.",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a color.",
        name: "color",
    },
    {
        type: "list",
        message: "Please select a shape.",
        choices: ["Circle", "Triangle", "Square"],
        name: "shape",
    }, 
    {
        type: "input",
        message: "Please provide the file name",
        name: "file",
    },
    {
        type: "input",
        message: "What would you like the height to be?",
        name: "height",
    }, 
    {
        type: "input",
        message: "What would you like the width to be?",
        name: "width",
    }
]

// function to create SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(`${fileName} has been generated successfully!`)
);
}

// function to initialize
function init() {
    inquirer.prompt(Questions)
        .then((answers) => {
            const shapeInfo = shapes(answers);
            const fileName = `${answers.file}.svg`;
            writeToFile(fileName, shapeInfo);
        })
        .catch((error) => {
            console.error("Error occurred:", error);
        });
};

// calling function to start process
init(); 