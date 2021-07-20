const Manager = require(`./lib/Manager`);
const Intern = require(`./lib/Intern`);
const Engineer = require(`./lib/Engineer`);
const generate = require(`./util/generateHtml`);
const inquirer = require("inquirer");
const fs = require(`fs`);

// TODO: WHEN I am prompted for my team members and their information
//WHEN I start the application Questions
// TODO: THEN I am prompted to enter the team manager’s // name, // employee ID, // email address, and // office number
// TODO: THEN I am presented with a menu with the option to add an // engineer or an // intern or to // finish building my team
// TODO: THEN I am prompted to enter the engineer’s // name, // ID, // email, and //GitHub username, and I am taken back to the menu
// TODO: THEN I am prompted to enter the intern’s //name, //ID, //email, and //school, and I am taken back to the menu
function askQuestion() {
    inquirer.prompt([{
        name: "question",
        type: "list",
        message: `What Employee are you making a profile for?`,
        choices: ["Team Manager", "Team Engineer", "Team Intern", "Finished"]
    }]).then(answers => {
        switch (answers.question) {
            case "Team Manager":
                console.log("Add Manager!")
                addManager();
                break;

            case "Team Engineer":
                console.log("Add Engineer!")
                addEngineer();
                break;

            case "Team Intern":
                console.log("Add Intern!")
                addIntern();
                break;

            case "Finished":
                fs.writeFile(`employees.html`, generate, err => console.log(err))
                console.log(`Your Teams Profile has been created Thanks!`);
                break;
            default:

                break;
        }
    })
}

function addManager() {

}

// WHEN I decide to finish building my team THEN I exit the application, and the HTML is generated
// TODO: THEN an HTML file is generated that displays a nicely formatted team roster based on user input