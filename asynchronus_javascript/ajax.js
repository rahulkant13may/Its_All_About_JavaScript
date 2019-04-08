window.onload = function(){


// 1) Vanila JAvascript:

// =================================================================
// This alllow us to make http request and get the data back
// Ready state 0 the request not initialized
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(){

		      console.log(http)
// based on ready state and status we are moving forward
		if (http.readyState == 4 && http.status == 200){
			console.log(JSON.parse(http.response))
		}
	}

// here true is for asynchronous and false for synchronous
// Ready state 1 the request has been set up
	http.open('GET', 'https://api.github.com/users/mralexgray/repos', true);

// data is prepared and now go and get back the data
// Ready state 2 the request has been sent
	http.send();

// Ready state 3 the request is in process
// Ready state 4 the request is complete
// =================================================================




// 2) JQUERY METHOD :

// =================================================================

$.get('https://api.github.com/users/mralexgray/repos', function(data){
	console.log(data)
})
// =================================================================
};