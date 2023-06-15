const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  async run() {
    try {
      const { text, textColor, shapeType, shapeColor } = await inquirer.prompt([
        {
          name: "text",
          type: "input",
          message: "Enter text. (Must not be more than 3 characters.)",
          validate: (text) =>
            text.length <= 3 || "The text cannot contain more than 3 characters",
        },

        {
          name: "textColor",
          type: "input",
          message: "Enter text color",
        },

        {
          name: "shapeType",
          type: "list",
          message: "Which shape would you like your logo to be?",
          choices: ["circle", "square", "triangle"],
        },

        {
          name: "shapeColor",
          type: "input",
          message: "Enter a shape color",
        },
      ]);

      let shape;
      switch (shapeType) {
        case "circle":
          shape = new Circle();
          break;
        case "square":
          shape = new Square();
          break;
        default:
          shape = new Triangle();
          break;
      }
      shape.setColor(shapeColor);

      const svg = new SVG();
      svg.setText(text, textColor);
      svg.setShape(shape);
      await writeFile("logo.svg", svg.render());

      console.log("logo.svg has been generated");
    } catch (error) {
      console.log(error);
      console.log("Error occurred.");
    }
  }
}

module.exports = CLI;
