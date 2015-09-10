'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
      /*  templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'*/
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
        .when('/ourStory', {
            templateUrl: 'views/ourStory.html',
            controller: 'ourStoryCtrl',
            controllerAs: 'ourStory'
        })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl',
        controllerAs: 'test'
      })
      .when('/manish', {
        templateUrl: 'views/manish.html',
        controller: 'ManishCtrl',
        controllerAs: 'manish'
      })
      .when('/ourStory', {
        templateUrl: 'views/ourstory.html',
        controller: 'OurstoryCtrl',
        controllerAs: 'ourStory'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      .when('/thanku', {
        templateUrl: 'views/thanku.html',
        controller: 'ThankuCtrl',
        controllerAs: 'thanku'
      })
      .when('/honeymoon', {
        templateUrl: 'views/honeymoon.html',
        controller: 'HoneymoonCtrl',
        controllerAs: 'honeymoon'
      })
      .when('/carosal', {
        templateUrl: 'views/carosal.html',
        controller: 'CarosalCtrl',
        controllerAs: 'carosal'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
