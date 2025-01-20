// Creating an Object using object literals
const rectangle = { 
    length: 2, 
    breadth: 3, 
    area: function () { 
        return this.length * this.breadth 
    }
};
// Creating an Object using object constructor
const square = new Object(); 
square.side = 3; 
square.area = function () { 
    return this.side * this.side 
};

// Output
console.log("Area of the rectangle: " + rectangle.area()); 
console.log("Area of the square: " + square.area());