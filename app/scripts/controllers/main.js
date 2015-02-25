'use strict';

/**
 * @ngdoc function
 * @name museumGamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the museumGamesApp
 */
angular.module('museumGamesApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.curl = function() {
  		
      $http.get('http://localhost/test').success(function() {
  			console.log('OK');
  		}).error(function() {
  			console.log('Fail');
  		});    	
    };

  });
