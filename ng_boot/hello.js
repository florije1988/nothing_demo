/**
 * Created by florije on 2015/3/30.
 */
var helloApp = angular.module("helloApp", ['ui.bootstrap', 'ngRoute']);

helloApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'page.html',
            controller: 'CarouselDemoCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

//helloApp.controller("HelloCtrl", ['$scope', function ($scope) {
//    $scope.name = "calvin hobbes";
//}]);

helloApp.controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function () {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/300',
            text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' +
            ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }
});

helloApp.controller('PaginationDemoCtrl', function ($scope, $log) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        $log.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
});