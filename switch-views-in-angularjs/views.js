// module creation
	var nistantriApp = angular.module('nistantriApp', ['ngRoute']);

	// routes
	nistantriApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'partials/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'partials/about.html',
				controller  : 'aboutController'
			})

			// route for the service page
			.when('/service', {
				templateUrl : 'partials/services.html',
				controller  : 'serviceController'
			});
	
	});

	// create the controller and inject Angular's $scope
	nistantriApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.info = 'Welcome to Nistantri';
	});

	nistantriApp.controller('aboutController', function($scope) {
		$scope.info = 'About Nistantri';
	});

	nistantriApp.controller('serviceController', function($scope) {
		$scope.info = 'Building E-learning Authoring tool';
	});