const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const {Triangle, Circle, Square} = require('./lib/shapes.js');


class Svg {
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
    
}


const questions = [
    {
        type: "input",
        name: "text",
        message: "What do you want the TEXT to be? (up to 3 characters)",
    },
    {
        type: "input",
        name: "textColor",
        message: "What would you like the TEXT-COLOR to be?",
    },
    {
        type: "list",
        name: "shapes",
        message: "Choose a shape.",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name:"shapeColor",
        message: "What would you like the shape-color to be?"
    }
    
];


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt()
}

function svgTemplate(shape) {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>
    </svg>
    `
}
function init() {
    inquirer.prompt(questions).then((responses) => {

        let shape;

        if(responses.shapes === "Circle") {
            shape = new Circle (responses.text, responses.textColor, responses.shapeColor)

            
        } else if(responses.shapes === "Triangle") {
            shape = new Triangle (responses.text, responses.textColor, responses.shapeColor)

        }else if(responses.shapes === "Square") {
            shape = new Square (responses.text, responses.textColor, responses.shapeColor)
        }        



        console.log("created SVG logo!");
        writeToFile("./logo.svg", svgTemplate(shape));
    });
}

init();


