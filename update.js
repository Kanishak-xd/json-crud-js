const fs = require('fs');

function readJSON() {
    const data = fs.readFileSync('objects.json', 'utf8');
    return JSON.parse(data);
}
function writeJSON(data) {
    fs.writeFileSync('objects.json', JSON.stringify(data, null, 2));
}

// Update fname
function updateFname() {
    const data = readJSON();
    data[0].fname = "Kelzang";
    writeJSON(data);
}

updateFname();
