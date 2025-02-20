let person={
    name:"Ram",
    age:20,
    city:"Chennai"
}
console.log("Initial Object: ",person);
console.log("Name: ",person["name"]);
console.log("Age: ",person.age);
person.age=30;
console.log("Object after updating age property: ",person);
delete person.city;
console.log("Object after deleting city Property: ",person);