'use strict';
var lightApp = angular.module('lightApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'schemaForm',
    'ui.ace',
    'ui.tree',
    'ui.tree-filter',
    'ui.highlight',
    'hc.marked',
    'toaster',
    'schemaForm-marked',
    'pascalprecht.translate',
    'mgcrea.ngStrap',
    'schemaForm-datepicker',
    'schemaForm-datetimepicker',
    'schemaForm-timepicker',
    'angular-loading-bar',
    'LocalStorageModule'
])
.config(['$httpProvider',
    function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    }
])
.config(['$routeProvider', '$locationProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function ($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

    // Notice that the registration methods on the
    // module are now being overridden by their provider equivalents
    lightApp.controller = $controllerProvider.register;
    lightApp.directive  = $compileProvider.directive;
    lightApp.filter     = $filterProvider.register;
    lightApp.factory    = $provide.factory;
    lightApp.service    = $provide.service;

    $routeProvider
      .when('/', {
        templateUrl: 'tpl/getstarted.html'
      })
      .when('/signin', {
        templateUrl: 'views/form.html',
        controller: 'signinCtrl'
      })
      .when('/form/:id/:parentId?', {
        templateUrl: 'views/form.html',
        controller: 'formCtrl'
      })
      .when('/page/:id', {
        templateUrl: 'views/page.html',
        controller: 'pageCtrl'
      })
      .when('/userAdmin', {
        templateUrl: 'tpl/userAdminHome.html',
        controller: 'UserAdminHomeCtrl'
      })
      .when('/menuAdmin', {
        templateUrl: 'views/menuAdmin.html',
        controller: 'MenuAdminCtrl'
      })
      .when('/forum', {
        templateUrl: 'views/forum.html',
        controller: 'forumCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('omnichannel', {
        templateUrl: 'views/omnichannel.html',
        controller: 'omnichannelCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
}])
.run(['$rootScope', 'authService', function ($rootScope, authService) {
        console.log("Angular is running...");
        authService.fillAuthData();
    }
]);
