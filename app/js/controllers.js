'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').then(function(response) {
      $scope.phones = response.data;
    });
    $scope.orderProp = 'age';
  }]);


phonecatControllers.controller('PhoneDetailCtrl', ['$scope','$routeParams', '$http',
  function ($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response){
      $scope.phone = response.data;
      $scope.mainImageUrl = data.images[0]; //default value
    });

    $scope.setImage = function(imageUrl){
      $scope.mainImageUrl = imageUrl;
    };
  }]);