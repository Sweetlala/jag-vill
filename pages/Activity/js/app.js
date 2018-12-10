var app = angular.module('RosApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templetes/home.html',
            controller: 'HomeCtrl'
        })
        .when('/activity', {
            templateUrl: 'templetes/activity.html',
            controller: 'ActivityController'
        })
       .when('/activity-results/:adress', { //: is a parameter and it can be whatever we call it the key
            templateUrl: 'templetes/activity-results.html',
            controller: 'ActivityResultsController'
        });

});