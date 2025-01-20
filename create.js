const fs = require('fs');

// Function to read JSON data
function readJSON() {
    const data = fs.readFileSync('objects.json', 'utf8');
    return JSON.parse(data);
}

// Helper function to write JSON data
function writeJSON(data) {
    fs.writeFileSync('objects.json', JSON.stringify(data, null, 2));
}

// Creating an object
const data = readJSON();

const myFriend = {
    fname: "Kelzang", 
    lname: "Dorji",
    age: 20
};

data.push(myFriend);
writeJSON(data);
console.log(`Created: ${JSON.stringify(myFriend)}`);