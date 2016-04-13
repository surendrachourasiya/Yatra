var Admin_app = angular.module('Admin', []);
 
Admin_app.controller('AdminController', function ($scope) {
    
	
			$scope.yatraAdd = function(){
				
				return $scope.info = $scope.yatra_name +" "+$scope.places_to_be_visited+" "+ $scope.advanced_payment+" "+ $scope.total_payment;
			   }
		});





 