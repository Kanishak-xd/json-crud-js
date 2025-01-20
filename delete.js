const fs = require('fs');

function readJSON() {
    const data = fs.readFileSync('objects.json', 'utf8');
    return JSON.parse(data);
}
function writeJSON(data) {
    fs.writeFileSync('objects.json', JSON.stringify(data, null, 2));
}

// Delete age
function deleteAge() {
    const data = readJSON();
    data.forEach(obj => {
        delete obj.age;
    });
    writeJSON(data);
}

deleteAge();
