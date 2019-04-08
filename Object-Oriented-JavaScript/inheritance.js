class User{
	constructor(name, email){
		this.name = name;
		this.email = email;
	}

	 login(){
		console.log(this.name, "has logged in");
		return this;
	}

	logout(){
		console.log(this.name, "has logged out");
		return this;
	}
}


class Admin extends User{
	delete(user){

		users = users.filter(u => {
			return u.email != user.email
		})
	}
}

var john = new User("john", "john@gmail.com")
var mac = new User("mac", "mac@gmail.com")
var admin = new Admin("rahul", "rahul@gmail.com")

var users = [john, mac, admin]

// method chaining
john.login().logout()

// only admin can  delete user
admin.delete(mac)

console.log(users)
