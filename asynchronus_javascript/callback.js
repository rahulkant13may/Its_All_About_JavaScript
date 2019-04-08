window.onload = function () {
	
	// Callback function

	// A callback function, also known as a higher-order function, 
	// is a function that is passed to another function 
	// (let’s call this other function “otherFunction”) 
	// as a parameter, and the callback function is called (or executed) 
	// inside the otherFunction. 

// 1 Example of callback
// =========================================================
	function callback(val) {
		// console.log(val)
	}

	var fruits = ["apple", "banana", "mango"]

// anonymous function
	fruits.forEach(function (val){
		// console.log(val)
	})

	fruits.forEach(callback)

// =========================================================


// 2 Jquery method of callback , its callback hell 
// =========================================================

$.ajax({
	type: 'GET',
	url: "https://api.github.com/users/hadley/orgs",
	success: function(data){
		console.log("orgs")
		console.log(data)

	$.ajax({
		type: 'GET',
		url: "https://api.github.com/users/hadley/orgs",
		success: function(data){
			console.log("repos")
			console.log(data)

		$.ajax({
			type: 'GET',
			url: "https://api.github.com/repositories/19438/commits",
			success: function(data){
				console.log("commits")
				console.log(data)
			},
			error: function(jqXHR, textStatus, error){
				console.log(error)
			}
		});
		},
		error: function(jqXHR, textStatus, error){
			
			console.log(error)
		}
	});

	},
	error: function(jqXHR, textStatus, error){
		console.log(error)
	}
});
// =========================================================


};