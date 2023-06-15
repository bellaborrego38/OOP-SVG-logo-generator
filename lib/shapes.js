class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    
    }

}

class Triangle extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render(){
        
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
        
    }
}

class Square extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render(){
        
        return `<rect x="50" y="20" width="150" height="150"
        style="fill: ${this.shapeColor}" />`

    }

}


class Circle extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render(){
        
        return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill= "${this.shapeColor}" />`

    }

}

module.exports = {
    Shape,
    Triangle,
    Square,
    Circle,
};