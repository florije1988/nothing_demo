/**
 * Created by florije on 2015/3/31.
 */
var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.edit']);

app.controller('MainCtrl', ['$scope', 'uiGridConstants', 'uiGridEditConstants', function ($scope, uiGridConstants, uiGridEditConstants) {

    $scope.dateGrid = {
        enableCellEdit: true,
        columnDefs: [
            {
                field: 'firstName',
                displayName: 'username'
            }

        ]
    };

    var myData = [
        {
            "firstName": "Cox",
            "lastName": "Carney",
            "company": "Enormo",
            "employed": true
        },
        {
            "firstName": "Lorraine",
            "lastName": "Wise",
            "company": "Comveyer",
            "employed": false
        },
        {
            "firstName": "Nancy",
            "lastName": "Waters",
            "company": "Fuelton",
            "employed": false
        }
    ];

    $scope.dateGrid.data = myData;

    $scope.$on(uiGridEditConstants.events.BEGIN_CELL_EDIT, function (evt) {
        $log.log('BEGIN_CELL_EDIT');
        $log.log(evt.targetScope.row.entity);  // the underlying data bound to the row
        // Detect changes and send entity to server
    });

    $scope.$on('ngGridEventStartCellEdit', function (evt) {
        $log.log('ngGridEventStartCellEdit');
        $log.log(evt.targetScope.row.entity);  // the underlying data bound to the row
        // Detect changes and send entity to server
    });
}]);