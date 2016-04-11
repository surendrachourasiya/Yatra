'use strict'

var app = angular.module('myapp' ['ngMaterial']);

app.controller('foodCtrl', function($scope){
	$scope.food = [
		{'id':1,'name':'Biryani'},
    {'id':2,'name':'Raita'},
    {'id':3,'name':'Hot & sour soup'},
		{'id':4,'name':'Paratha'},
		{'id':5,'name':'Upma'},
		{'id':6,'name':'Yogurt Rice'},
		{'id':6,'name':'Fried Rice'},
		{'id':6,'name':'Coconut Rice'},
		{'id':6,'name':'Wheat Pasta'},
		{'id':6,'name':'Italian Soup'},
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