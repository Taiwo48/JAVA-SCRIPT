 const person = {firstName: 'Adebayo',lastName: 'taiwo',fullName: function() {
	return this.firstName+this.lastName;
}
};


console.log(person.fullName());