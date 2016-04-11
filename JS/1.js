var app = angular.module("MyApp", ['ui.bootstrap']);

app.controller('mainController', function($scope) {
  
  $scope.urls = [
    {
      id: 12,
      
      title: 'First beautiful title',
      descr: 'First description',
      traffic: 54654,
    },
    {
      id: 34,
      
      title: 'Second beautiful title',
      descr: 'Second beautiful description',
      traffic: 65123,
    },
     {
      id: 56,
      
      title: 'Third beautiful title',
      descr: 'Third beautiful description',
      traffic: 2689,
    },
     {
      id: 78,
    
      title: 'Fourth beautiful title',
      descr: 'Fourth beautiful description',
      traffic: 1543,
    }
    ];
    
    
    
});