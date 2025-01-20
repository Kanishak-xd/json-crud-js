// Creating an object
let friend = new Object();
friend.name = "Kelzang";
friend.age = 20;
friend.country = "Bhutan"

// Output
console.log(`Friend name is ${friend.name}, he is ${friend.age} years old and he is from ${friend.country}`);

// Using destructuring
const { age, ...newObj } = friend;
console.log("New object without age attribute: ", newObj);

// Using delete operator
delete friend.country;
console.log("Original object after deleting country: ", friend);



