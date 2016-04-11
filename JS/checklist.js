	// Code goes here

var app = angular.module('myapp',[]);

app.controller('AuthorsCtrl', function($scope){
  
  $scope.users = [
    {'id':1,'name':'Biryani'},
    {'id':2,'name':'Raita'},
    {'id':3,'name':'Hot & sour soup'},
		{'id':4,'name':'Paratha'},
		{'id':5,'name':'Upma'},
		{'id':7,'name':'Yogurt Rice'},
		{'id':8,'name':'Fried Rice'},
		{'id':9,'name':'Coconut Rice'},
		{'id':10,'name':'Wheat Pasta'},
		{'id':11,'name':'Italian Soup'},
  ];
	
  $scope.authors = {};
  
});

app.filter('toText', function(){
  return function(jsonRaw){
    if(jsonRaw){
    andVal=[]
    for(var i in jsonRaw){
			if(jsonRaw[i])
        andVal.push(i);
    } 
    return andVal.join(' , ');
    }
  }
});