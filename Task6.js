const person = {
  firstName: "Adebayo",
  lastName: "Taiwo",
  age: 25
};
function getPersonInfo(person) {
  return `First Name: ${person.firstName}, Last Name: ${person.lastName}, Age: ${person.age}`;
}

console.log(getPersonInfo(person));
