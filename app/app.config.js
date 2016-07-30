'use strict';

angular.
  module('myApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
      when('/main',{
        templateUrl: 'pages/main.template.html'
      }).
          when('/story',{
        templateUrl: 'pages/story.html'
      }).
          when('/pictures',{
        templateUrl: 'pictures/pictures.template.html'
      }).
      when('/painters',{
        templateUrl: 'pages/painters.template.html'
      }).
          when ('/contact', {
        templateUrl: 'pages/contact-form.template.html'
      }).
        otherwise('/');
    }
  ]);
