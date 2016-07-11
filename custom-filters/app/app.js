var app = angular.module('angularTable', []);

app.controller('demoCtrl',function($http){
	var vm = this;
	vm.users = []; //declare an empty array
	$http.get("mockJson/mock.json").success(function(response){ 
		vm.users = response;  //ajax request to fetch data into vm.data
	});
});


//filter name customSearch
app.filter('customSearch',[function(){
	/** @data is the original data**/
	/** @first_name is the search query for first_name**/
	/** @status is the search query for status**/
	return function(data,first_name,status){
		var output = []; // store result in this
		
		/**@case1 if both searches are present**/
		if(!!first_name && !!status){
			first_name = first_name.toLowerCase(); 
			status = status.toLowerCase();
			//loop over the original array
			for(var i = 0;i<data.length; i++){
				// check if any result matching the search request
				if(data[i].first_name.toLowerCase().indexOf(first_name) !== -1 && data[i].status.toLowerCase().indexOf(status) !== -1){
					//push data into results array
					output.push(data[i]);
				}
			}
		} else if(!!first_name){ /**@case2 if only first_name query is present**/
			first_name = first_name.toLowerCase();
			for(var i = 0;i<data.length; i++){
				if(data[i].first_name.toLowerCase().indexOf(first_name) !== -1){
					output.push(data[i]);
				}
			}
		} else if(!!status){ /**@case3 if only status query is present**/
			status = status.toLowerCase();
			for(var i = 0;i<data.length; i++){
				if(data[i].status.toLowerCase().indexOf(status) !== -1){
					output.push(data[i]);
				}
			}
		} else {
			/**@case4 no query is present**/
			output = data;
		}
		return output; // finally return the result
	}
}]);