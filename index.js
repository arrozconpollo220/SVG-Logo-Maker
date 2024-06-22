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
        choices: ["Cicle", "Triangle", "Square"],
        name: "shapes",
    }, 
    {
        type: "input",
        message: "Please provide the file name",
        name: "file",
    },
    {
        type: "input",
        message: "What size would you like your image to be?",
        name: "size",
    }
]

// function to create SVG file
function writeToFile(fileName, data) {
    fs.writeFile('logo.svg', data, (err) =>
        err ? console.error(err) : console.log(`${fileName} has been generated successfully!`)
);
}

// function to initialize
function init() {
    inquirer.prompt(Questions)
        .then((answers) => {
            const shapeInfo = shapes(answers);
            writeToFile('logo.svg', shapeInfo);
        })
        .catch((error) => {
            console.error("Error occurred:", error);
        });
};

// calling function
init(); 