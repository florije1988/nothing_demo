///**
// * Created by florije on 2015/3/30.
// */
//
//var myApp = angular.module('myApp', ['ui.bootstrap', 'ngRoute']);
//
//myApp.controller('CarouselDemoCtrl', function ($scope) {
//    $scope.myInterval = 5000;
//    var slides = $scope.slides = [];
//    $scope.addSlide = function () {
//        var newWidth = 600 + slides.length + 1;
//        slides.push({
//            image: 'http://placekitten.com/' + newWidth + '/300',
//            text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' +
//            ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
//        });
//    };
//    for (var i = 0; i < 4; i++) {
//        $scope.addSlide();
//    }
//});