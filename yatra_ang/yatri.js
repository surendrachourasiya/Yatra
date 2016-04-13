var Admin_app = angular.module('Admin', []);
 
Admin_app.controller('AdminController', function ($scope) {
    
	
			$scope.profile = function(){
				
				 return $scope.info = $scope.first_name +" "+$scope.last_name+" "+$scope.initiated_name+" "+ $scope.date_of_birth+" "+$scope.street +" "+$scope.city+" "+ $scope.state+" "+ $scope.country+" "+$scope.email_id +" "+$scope.gender+" "+ $scope.contact_number;
			   }
		});