'use strict';

/**
 * @ngdoc function
 * @name angularGeneratorTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGeneratorTestApp
 */
angular.module('angularGeneratorTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
