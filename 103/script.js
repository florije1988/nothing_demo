/**
 * Created by florije on 2015/3/28.
 */
angular.module('example', ['ngRoute', 'ngAnimate', 'flash'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'home.html'})
            .when('/some', {templateUrl: 'some.html'})
            .when('/other', {templateUrl: 'other.html'})
            .when('/page', {templateUrl: 'page.html'});
    }])

    .run(['$rootScope', 'flash', function ($rootScope, flash) {
        $rootScope.$on('$routeChangeSuccess', function (event, to, from) {
            if (!from || !from.$$route.originalPath) return;
            from = from.$$route.originalPath;
            to = to.$$route.originalPath;
            flash('From "' + from + '" to "' + to + '"');
        });
    }]);