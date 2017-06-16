fuction myFunction <> {
	console.log <'called my function '>
} 
 function.prototype.call.call<myFunction> 

var person = {
    firstName:"liz",
    lastName: "saludaga",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
person.fullName();         // Will return "liza saludaga"