// Node Packages
const inquirer = require('inquirer');
const fs = require('fs');

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
        name: "shapes",
        choices: "Cicle, Triangle, Square",
    }, 
    {
        type: "input",
        message: "Please provide the file name",
        name: "file",
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
    inquirer.prompt(questions)
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