var app = angular.module('PlannerApp', ['ngMaterial', 'ngMessages',"xeditable", "ngMockE2E"]);

   app.controller("DateAndLocation", function($scope) {
        $scope.datedetails = [
            {            'plocation':'Dwarka',
                         'pfrom': 'ff',
                         'pto': 'ojiog',
                        
                         
             }
            
            ];
      
$scope.addschedule = function() {
    if ($scope.date && $scope.type) {
      $scope.datedetails.push({
                        'plocation':$scope.location,
                         'pfrom':$scope.from_date,
                         'pto':$scope.to_date
                         

                      });
      
      $scope.location='';
      $scope.from_date='';
      $scope.to_date='';
   
    };
};
  
});
 
