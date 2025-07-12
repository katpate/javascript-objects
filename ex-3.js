// Exercise #3 Debugging

// Start coding here
const employee = {
  name: "John Doe",
  age: 18,
  address: {
    street: "123 Main Street",
    city: "Cityville",
    states: "Stateville",
    country: "Countryland",
    postalCode: "12345",
  },
};

employee.name = "John Doe";
employee.age = 18;
employee.address.states = "123 Main Street";
employee.address.city = "Citiville";
employee.address.states = "Stateville";
employee.address.country = "Countryland";
employee.address.postalCode = "12345"; 

console.log("Employee Name: " + employee.name);
console.log("Employee Age: " + employee.age);
console.log("Employee Address: " +
    employee.address.street +
    ", " +
    employee.address.city +
    ", " +
    employee.address.states +
    ", " +
    employee.address.country +
    " " +
    employee.address.postalCode
);
