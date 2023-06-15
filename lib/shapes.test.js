const { Square, Triangle, Circle } = require("./shapes");


describe("Triangle", () => {
  let triangle;

  beforeEach(() => {
    triangle = new Triangle();
  });

  test("should render svg for a purple polygon", () => {
    const expectedSvg =
      '<polygon points="250,60 100,400 400,400" fill="purple" />';
    triangle.setColor("purple");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });

  test("FillColor param", () => {
    const expectedSvg =
      '<polygon points="250,60 100,400 400,400" fill="purple" />';
    triangle.setColor("purple");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  let square;

  beforeEach(() => {
    square = new Square();
  });

  test("should render svg for a pink polygon", () => {
    const expectedSvg =
      '<polygon points="100,20 20,180 180,180" fill=  "pink"/>';
    square.setColor("pink");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });

  test("FillColor param", () => {
    const expectedSvg =
      '<polygon points="100,20 20,180 180,180" fill=  "pink" />';
    square.setColor("pink");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Circle", () => {
  let circle;

  beforeEach(() => {
    circle = new Circle();
  });

  test("should render svg for a black circle", () => {
    const expectedSvg = ' <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />';
    circle.setColor("red");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });

  test("FillColor param", () => {
    const expectedSvg = '<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red"/>';
    circle.setColor("red");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

