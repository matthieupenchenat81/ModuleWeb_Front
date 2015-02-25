'use strict';

/**
 * @ngdoc function
 * @name museumGamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the museumGamesApp
 */
angular.module('museumGamesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
