'use strict';

/**
 * @ngdoc function
 * @name angularGeneratorTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularGeneratorTestApp
 */
angular.module('angularGeneratorTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
