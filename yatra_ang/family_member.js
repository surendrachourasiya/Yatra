/*var Admin_app = angular.module('Admin', []);
 
Admin_app.controller('AdminController', function ($scope) {
    
	
			$scope.profile = function(){
				
				 
			   }
		});
*/
var app =angular.module('yatriapp', ['ngMaterial', 'ngMessages']);
app.controller('repeatController', function($scope) {
  $scope.family = [
    {name:'John'},
    {name:'Jessie'},
    {name:'Peter'},
    {name:'Sebastian'},
    {name:'Erika'},
    {name:'Patrick'},
    {name:'Samantha'}
  ];
});


app.controller('BasicDemoCtrl', function DemoCtrl($mdDialog) {
    var originatorEv;

    this.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
});

app.controller('SubjectDropDownController', function ($scope) {
 
    $scope.subjects = ['Math', 'Physics', 'Chemistry', 'Hindi', 'English'];
});