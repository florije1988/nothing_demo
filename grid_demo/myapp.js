/**
 * Created by boqingfu on 15/4/18.
 */
var myApp = angular.module("myApp", ['ui.grid', 'ngResource']);
myApp.controller("MyController",
    ["$scope", "$resource", function ($scope, $resource) {
        $scope.myData = [];

        var youtubeVideoService = $resource("https://gdata.youtube.com/feeds/api/videos?q=googledevelopers&max-results=5&v=2&alt=jsonc&orderby=published");

        youtubeVideoService.get()
            .$promise.then(function (responseData) {
                angular.forEach(responseData.data.items,
                    function (aSingleRow) {
                        $scope.myData.push({
                            "category": aSingleRow.category,
                            "title": aSingleRow.title
                        });

                    });
            });
    }]);