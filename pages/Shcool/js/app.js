var app = angular.module('RosApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templetes/home.html',
            controller: 'HomeCtrl'
        })
        .when('/skol', {
            templateUrl: 'templetes/skol.html',
            controller: 'skolCtrl'
        })
    
       .when('/skolresults/:omrade1/:skoltyp', { //: is a parameter and it can be whatever we call it the key
        templateUrl: 'templetes/skolresults.html',
        controller: 'skolResultsCtrl'
    });

});