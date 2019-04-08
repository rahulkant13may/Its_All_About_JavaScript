window.open = function(){

	function get(url){

		return new Promise(function(resolve, reject){

			var xhr = new XMLHttpRequest();

			xhr.open("GET", url, true);

			xhr.onload(function(){
				if(xhr.status == 200){
					resolve(JSON.parse(xhr.response));
				}

				else{
					reject(statusText);
				}
			});

			xhr.onerror(function(){
				reject(statusText);

			});

			xhr.send();

		});
	}

	var promise = get("https://api.github.com/users/hadley/orgs");

	promise.then(function(tweets){
		console.log(tweets);
		return get("https://api.github.com/repositories/19438/commits");

	}).then(function(commits){
		conole.log(commits)

	}).catch(function(error){
		console.log(error);
	})

};
