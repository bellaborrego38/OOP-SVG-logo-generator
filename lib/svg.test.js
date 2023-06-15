const SVG = require("./svg");
const { Circle, Square, Triangle } = require("./shapes");


  describe("SVG", () => {
    test("should render an empty SVG with default width and height", () => {
      const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
      const svg = new SVG();
      const actualSvg = svg.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  
    test("should set text and shape elements in the SVG", () => {
      const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">Hello</text></svg>';
      const svg = new SVG();
      const circle = new Circle();
      circle.setColor("blue");
      svg.setShape(circle);
      svg.setText("Hello", "white");
      const actualSvg = svg.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  
    test("should throw an error if text length exceeds the limit", () => {
      const svg = new SVG();
      expect(() => svg.setText("This is a very long text", "black")).toThrow("Text must not exceed the limit.");
    });
  
    test("should render SVG with a triangle shape", () => {
      const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,20 20,180 180,180" fill="purple" /></svg>';
      const svg = new SVG();
      const triangle = new Triangle();
      triangle.setColor("purple");
      svg.setShape(triangle);
      const actualSvg = svg.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  
    test("should render SVG with a square shape", () => {
      const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="green" /></svg>';
      const svg = new SVG();
      const square = new Square();
      square.setColor("green");
      svg.setShape(square);
      const actualSvg = svg.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });
