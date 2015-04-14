/**
 * Created by florije on 2015/3/19.
 */
var scotchApp = angular.module('MyApp', []);

scotchApp.controller('MyFirstCtrl', function ($scope) {
    // create a message to display in our view
    var employees = ['Catherine Grant', 'Monica Grant',
        'Christopher Grant', 'Jennifer Grant'
    ];
    $scope.ourEmployees = employees;
});

scotchApp.controller('MyFilterDemoCtrl', function ($scope) {
    var someData = {
        firstName: 'JENNA',
        surname: 'GRANT',
        dateJoined: new Date(2010, 2, 23),
        consumption: 123.659855,
        plan: 'super-basic-plan',
        // Last 12 months of data usage
        monthlyUsageHistory: [123.659855,
            89.645222,
            97.235644,
            129.555555,
            188.699855,
            65.652545,
            123.659855,
            89.645222,
            97.235644,
            129.555555,
            188.699855,
            65.652545]
    };

    // do the lowercaing here instead of using a filter
    someData.firstName = someData.firstName.toLowerCase();
    someData.surname = someData.surname.toLowerCase();

    $scope.data = someData;
});