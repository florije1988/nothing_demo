/**
 * Created by florije on 2015/3/22.
 */
'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    // configure the routes
    $routeProvider
        .when('/', {
            // route for the home page
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .when('pages/about', {
            // route for the about page
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })
        .when('pages/contact/', {
            // route for the contact page
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        })
        .otherwise({
            // when all else fails
            templateUrl: 'pages/routeNotFound.html',
            controller: 'notFoundController'
        })
});

app.controller('homeController', function ($scope) {
    $scope.message = 'Welcome to my home page.';
});

app.controller('aboutController', function ($scope) {
    $scope.message = 'Welcome to my about page.';
});

app.controller('contactController', function ($scope) {
    $scope.message = 'Welcome to my contact page.';
});

app.controller('notFoundController', function ($scope) {
    $scope.message = 'There seems to be a problem finding the page you wanted';
    $scope.attemptedPath = $location.path();
});