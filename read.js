// Creating an object
const rectangle = new Object();
rectangle.length = 2;
rectangle.breadth = 3;
rectangle.area = function () {
    return this.length * this.breadth;
} 

// Output using Object Destructuring
const { length } = rectangle 
console.log("Rectangle length: " + length); 

// Output using Square Brackets
console.log("Rectangle breadth: " + rectangle['breadth']);

// Output using dot notation
console.log("Rectangle area: " + rectangle.area());
