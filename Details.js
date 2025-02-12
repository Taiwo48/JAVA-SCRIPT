const Student = {
    name: "John Doe",
    age: 23,
    courses: ["math", "physics", "computer science"],
    address: {
        city: "New York",
        zip: 10001,
    },
    GPA: 3.8,
    getDetails: function() {
        return `${this.name} is ${this.age} years ols and has a ${this.GPA} GPA`
          }
}
console.log(Student.getDetails());