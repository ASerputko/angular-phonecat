'use strict';

angular.
  module('core').
  filter('checkmark2', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });
