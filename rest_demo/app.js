/**
 * Created by florije on 2015/3/23.
 */
'use strict';

var myApp = angular.module('myApp', ['ngResource']);

myApp.factory('UsersService', ['$resource', function ($resource) {
    return $resource('rest_data.json', null,
        {
            'query': {method: 'GET', isArray: true}
        });
}]);

myApp.controller('UsersController', function ($scope, UsersService) {
    //
    var users = UsersService.query();
    $scope.users = users
});