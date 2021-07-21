const Manager = require(`./lib/Manager`);
const Intern = require(`./lib/Intern`);
const Engineer = require(`./lib/Engineer`);
const generate = require(`./util/generateHtml`);
const inquirer = require("inquirer");
const fs = require(`fs`);


let HTML = ``;
const employeeList = [];

function askQuestion() {
    inquirer.prompt([{
        name: "role",
        type: "list",
        message: `What Employee are you making a profile for?`,
        choices: ["Team Manager", "Team Engineer", "Team Intern", "Finished"]
    }]).then(answers => {
        switch (answers.role) {
            case "Team Manager":
                addManager();
                break;

            case "Team Engineer":
                addEngineer();
                break;

            case "Team Intern":
                addIntern();
                break;

            case "Finished":
                HTML += generate(employeeList);
                fs.writeFile(`myTeam.html`, HTML, err => console.log(err))
                break;
        }
    })
}

function addManager() {
    inquirer.prompt([{
        type: "input",
        message: "Team Manager's name?",
        name: "name"
    }, {
        type: "number",
        message: "Employee ID #?",
        name: "id"
    }, {
        type: "input",
        message: "Email address?",
        name: "email"
    }, {
        type: "number",
        message: "Office number?",
        name: "officeNumber"
    }]).then(answer => {
        const employee = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
        employeeList.push(employee)
        askQuestion();
    })
}

function addEngineer() {
    inquirer.prompt([{
        type: "input",
        message: "Engineer's Name?",
        name: "name"
    }, {
        type: "number",
        message: "Employee ID #?",
        name: "id"
    }, {
        type: "input",
        message: "Email address?",
        name: "email"
    }, {
        type: "input",
        message: "Github Username?",
        name: "github"
    }]).then(answer => {
        const employee = new Engineer(answer.name, answer.id, answer.email, answer.github);
        employeeList.push(employee)
        askQuestion();
    })
}

function addIntern() {
    inquirer.prompt([{
        type: "input",
        message: "Intern's Name?",
        name: "name"
    }, {
        type: "number",
        message: "Employee ID #?",
        name: "id"
    }, {
        type: "input",
        message: "Email address?",
        name: "email"
    }, {
        type: "input",
        message: "Interns School?",
        name: "school"
    }]).then(answer => {
        const employee = new Intern(answer.name, answer.id, answer.email, answer.school);
        employeeList.push(employee)
        askQuestion();
    })
}

askQuestion();