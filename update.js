const myName = { 
    fname: "Kanishak", 
    lname: "Sharma", 
    flname: function () { 
        return this.fname + this.lname; 
    } 
};

// Display initial full name
console.log("Original Name: " + myName.flname()); 
  
// Update values using dot notation
myName.fname = "Kelzang";  

// Update values using brackets
myName['lname'] = "Dorji";
  
// Display updated name 
console.log("Updated Name: " + myName.flname());