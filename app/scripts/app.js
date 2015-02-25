'use strict';

(function() {


  var monApp = angular.module('museumGamesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]);

  monApp.config(["$stateProvider", "$urlRouterProvider", "$httpProvider",
   function($stateProvider, $urlRouterProvider, $httpProvider) {

    //$httpProvider.defaults.headers.post = {'Content-Type' : "text/plain"};

    $stateProvider
      .state('index', {
        url: "/referents",
        templateUrl: "views/home.html",
        controller: 'MainCtrl'
      })

    .state('referentGames', {
      url: "/referents/{idReferent}/games",
      templateUrl: "views/referent_games.html",
      controller: 'MainCtrl'
    })

    .state('game', {
      url: "/referents/{idReferent}/games/{idGame}",
      templateUrl: "views/play.html",
      controller: 'MainCtrl'
    })


    .state('login', {
      url: "/login",
      templateUrl: "views/auth/login.html",
      controller: 'MainCtrl'
    })
    .state('referent', {
      url: "/referent",
      templateUrl: "views/referent.html",
      controller: 'MainCtrl'
    })
    .state('admin', {
      url: "/admin",
      templateUrl: "views/admin.html",
      controller: 'MainCtrl'
    })

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/referents");

  }]);



})();