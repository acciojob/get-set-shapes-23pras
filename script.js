class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // Call the constructor of the parent class
    super(side, side);
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this.width;
  }
}

// Example usage
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); 
console.log(rectangle.height); 
console.log(rectangle.getArea());

const square = new Square(7);
console.log(square.width); 
console.log(square.height); 
console.log(square.getArea()); 
console.log(square.getPerimeter()); 

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;