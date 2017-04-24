'use strict';

angular.
  module('core').
  filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  }).
  filter('checkmark2', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });
