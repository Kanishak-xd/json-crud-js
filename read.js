const fs = require('fs');

let data = fs.readFileSync('objects.json', 'utf8');
let jsonData = JSON.parse(data);

// Read JSON file
function readJSON() {
    jsonData.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
        });
    });
};

readJSON();
