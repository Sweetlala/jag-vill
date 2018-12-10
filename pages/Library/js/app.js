var app = angular.module('RosApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templetes/home.html',
            controller: 'HomeCtrl'
        })
        .when('/library', {
            templateUrl: 'templetes/library.html',
            controller: 'LibraryController'
        })
       .when('/library-results/:adress', { //: is a parameter and it can be whatever we call it the key
            templateUrl: 'templetes/library-results.html',
            controller: 'LibraryResultsController'
        });

});