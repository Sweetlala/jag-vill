var app= angular.module('RosApp',['ngRoute','firebase']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'templates/home.html',
        controller: 'FirstController'
    })
    .when('/sign-up',{
        templateUrl:'templates/sign-up.html',
        controller: 'SignUpController'
    })
    .when('/login',{
        templateUrl:'templates/login.html',
        controller: 'LoginController'
    })
    .when('/school', {
        templateUrl: 'templetes/school.html',
        controller: 'SchoolController'
    })
   .when('/school-results/:adress', { 
        templateUrl: 'templetes/school-results.html',
        controller: 'SchoolResultsController'
    })
    .when('/library', {
        templateUrl: 'templetes/library.html',
        controller: 'LibraryController'
    })
   .when('/library-results/:adress', {
        templateUrl: 'templetes/library-results.html',
        controller: 'LibraryResultsController'
    })
    .when('/activity', {
        templateUrl: 'templates/activity.html',
        controller: 'ActivityController'
    })
    .when('/activity-results/:adress', {
        templateUrl: 'templetes/activity-results.html',
        controller: 'ActivityResultsController'
    })
    .when('/museum', {
        templateUrl: 'templetes/museum.html',
        controller: 'MuseumController'
    })
   .when('/museum-results/:adress', {
        templateUrl: 'templetes/museum-results.html',
        controller: 'MuseumResultsController'
    });
});