function User(name, eamil){
	this.name = name;
	this.eamil = eamil;

}

User.prototype.login = function(){
	console.log(this.name, 'has logged in')
}


function Admin(...args){
	User.apply(this, args);
	this.role = "admin"
}

Admin.prototype = Object.create(User.prototype)


// adding method to Admin prototype
Admin.prototype.delete = function(user){
	users = users.filter(u => {
		return u.eamil != user.eamil
	})
}


var john = new User("john", "john@gmail.com")
var mac = new User("mac", "mac@gmail.com")
var admin = new Admin("rahul", "rahul@gmail.com")

var users = [john, mac, admin]

admin.delete(john)

console.log(john)
console.log(admin)

console.log(users)



// JavaScript function has has "prototype" property , The prototype property 
// is used primarily for inheritance; you add methods and 
// properties on a function’s prototype property to make 
// those methods and properties available to instances of that function.


// while instances has __proto__ property that allows you access objects 
// prototype property

// http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/