var app = angular.module('RosApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templetes/home.html',
            controller: 'HomeCtrl'
        })
        .when('/museum', {
            templateUrl: 'templetes/museum.html',
            controller: 'MuseumController'
        })
       .when('/museum-results/:adress', { //: is a parameter and it can be whatever we call it the key
            templateUrl: 'templetes/museum-results.html',
            controller: 'MuseumResultsController'
        });

});