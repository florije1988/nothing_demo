/**
 * Created by florije on 2015/3/19.
 */
// Create a new module
var myAppModule = angular.module('myAppModule', []);
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
// controller code would go here
        var someData = {
            firstName: 'JENNA',
            surname: 'GRANT',
            dateJoined: new Date(2010, 2, 23),
            consumption: 123.659855,
            plan: 'super-basic-plan'
        };

        $scope.data = someData;
    }
);
// configure the module with a filter
myAppModule.filter('stripDashes', function () {
    return function (txt) {
// filter code would go here
        return txt.split('-').join(' ');
    };
});


myAppModule.filter("toTitleCase", function () {
    return function (str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.
                    substr(1).toLowerCase();
        });
    };
});


myAppModule.controller('myProductDetailCtrl', function ($scope) {
        // Hide colors by default
        $scope.isHidden = true;
        // a function, placed into the scope, which
        // can toggle the value of the isHidden variable
        $scope.showHideColors = function () {
            $scope.isHidden = !$scope.isHidden;
        }
    }
);


myAppModule.controller('myDemoCtrl', function ($scope) {
        $scope.colorsArray = ['red', 'green', 'blue', 'purple', 'olive']
    }
);


myAppModule.directive('colorList', function () {
    return {
        restrict: 'AE',
        template: "<button ng-click='showHideColors()' type='button'>"
        + "{{isHidden ? 'Show Available Colors' : 'Hide Available Colors'}}"
        + "</button><div ng-hide='isHidden' id='colorContainer'>"
        + "</div>",
        link: function ($scope, $element) {
            // set default state of hide/show
            $scope.isHidden = true;
            // add function to manage hide/show state
            $scope.showHideColors = function () {
                $scope.isHidden = !$scope.isHidden;
            };
            // add colors divs to the document
            var colorContainer = $element.find('div');
            angular.forEach($scope.colorsArray, function (color) {
                var appendString = "<div style='background-color:" + color + "'>" + color + "</div>";
                colorContainer.append(appendString);
            });
        }
    };
});