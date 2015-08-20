'use strict';

/* Filters */
angular.module('phonecatFilters', []).filter('checkmark', function(){
  return function(input) {
    return input? '\u2713' :'\u1718'; //unicode char for cross and tick
  }
});

