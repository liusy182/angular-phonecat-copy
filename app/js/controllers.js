'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', 
  function ($scope, $http) {
    $http.get('phones/phones.json').then(function(response){
      $scope.phones = response.data;
    });
    $scope.orderProp = 'age';
}]);
