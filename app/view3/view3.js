'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', function(scope) {
  scope.sum = 0;
  scope.add = function add(number1, number2) {
    scope.sum = number1 + number2;

    return scope.sum;
  }
}]);
