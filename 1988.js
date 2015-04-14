/**
 * Created by florije on 2015/3/20.
 */
var myapp = angular.module('myapp', []);

myapp.controller("MyController", function ($scope) {
    //var person = {
    //    firstName: "Jimmy",
    //    age: 21,
    //    address: {
    //        street: '16 Somewhere Drive',
    //        suburb: 'Port Kennedy',
    //        state: 'Western Australia'
    //    }
    //};
    //$scope.person = person;
    //
    //$scope.showFirstName = function(){
    //    //alert("Name is: " + $scope.firstName);
    //    if(angular.isDefined($scope.firstName)){
    //        alert("Name is: " + $scope.firstName);
    //    }else{
    //        alert("Name is empty, please enter a value");
    //    }
    //}

    //var person = {};
    //person.newsletterOptIn = false;
    //person.channels = [
    //    { value: "television", label: "Television" },
    //    { value: "radio", label: "Radio" },
    //    { value: "social-media", label: "Social Media"},
    //    { value: "other", label: "Other"}
    //];
    //person.register = function () {
    //    <!-- pending implementation -->
    //}

    $scope.person = {};
    $scope.person.newsletterOptIn = false;
    $scope.person.channels = [
        {value: "television", label: "Television"},
        {value: "radio", label: "Radio"},
        {value: "social-media", label: "Social Media"},
        {value: "other", label: "Other"}
    ];
    $scope.register = function () {
        $scope.firstNameInvalid = false;
        $scope.lastNameInvalid = false;
        $scope.emailInvalid = false;
        if (!$scope.registrationForm.firstName.$valid) {
            $scope.firstNameInvalid = true;
        }
        if (!$scope.registrationForm.lastName.$valid) {
            $scope.lastNameInvalid = true;
        }
        if (!$scope.registrationForm.email.$valid) {
            $scope.emailInvalid = true;
        }
        if (!$scope.registrationForm.research.$valid) {
            $scope.researchInvalid = true;
        }
        if ($scope.registrationForm.$valid) {
            <!-- pending implementation -->
            $scope.doShow = true;
        }
    }
});