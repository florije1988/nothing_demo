var app = angular.module("MyApp", []);

app.config(function ($routeProvider) {
    $routeProvider.
        when("/home", {templateUrl: "home.html", controller: 'HomeController'}).
        when("/page", {templateUrl: "page.html", controller: 'PageController'}).
        otherwise({redirectTo: "/home"});
});

app.factory("flash", function ($rootScope) {
    var queue = [];
    var currentMessage = "";

    $rootScope.$on("$routeChangeSuccess", function () {
        currentMessage = queue.shift() || "";
    });

    return {
        setMessage: function (message) {
            queue.push(message);
        },
        getMessage: function () {
            return currentMessage;
        }
    };
});

app.controller("MyCtrl", function ($scope, $location, flash) {
    $scope.flash = flash;
    $scope.message = "Hello World";

    $scope.submit = function (message) {
        flash.setMessage(message);
        //$location.path("/page");
    }
});


app.controller('HomeController', function ($scope, $location, flash) {
    //$scope.flash = flash;
    //$scope.message = "Hello World";
    //
    //$scope.submit = function (message) {
    //    flash.setMessage(message);
    //    $location.path("/page");
    //}
});


app.controller('PageController', function ($scope) {
    //
});