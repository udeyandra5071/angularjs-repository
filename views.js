// create the module and name it
	var oodlesApp = angular.module('oodlesApp', ['ngRoute']);

	// routes
	oodlesApp.config(function($routeProvider) {
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
	oodlesApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.info = 'Welcome to Oodles';
	});

	oodlesApp.controller('aboutController', function($scope) {
		$scope.info = 'About Oodles';
	});

	oodlesApp.controller('serviceController', function($scope) {
		$scope.info = 'Service';
	});