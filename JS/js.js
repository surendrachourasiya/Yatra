// create the module and name it scotchApp
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

//config our routes
scotchApp.config(function($routeProvider) {
	$routeProvider
	
				//route for home page
				.when('/',{
						templateUrl : 'partials/home.html',
						controller  : 'mainController'
				})
				
				//route for the about page
				.when('/about', {
						templateUrl : 'partials/about.html',
						controller	: 'aboutController'
	})
				//route for the contact page
				.when('/contact',{
						templateUrl : 'partials/contact.html',
						controller 	: 'contactController'
	});
});
		//create the controller and inject Angular's $scope
		scotchApp.controller('mainController', function($scope) {
			//Create a message to display in our view
			$scope.message = 'Everyone come and see how good look!';
		});

		scotchApp.controller('aboutController',function($scope){
			$scope.message='Look! I am an about page.';
		});