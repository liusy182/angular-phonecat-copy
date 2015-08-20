'use strict';

/* App Module */
var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers',
    'phonecatFilters'
  ]);

phonecatApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.when('/phones', {
      templateUrl: 'partials/phone-list.html',
      controler: 'PhoneListCtrl'
    })
    .when('/phones/:phoneId', {
      templateUrl: 'partials/phone-detail.html',
      controler: 'PhoneDetailCtrl'
    })
    .otherwise({
      'redirectTo': '/phones'
    });
  }]);