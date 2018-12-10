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
        templateUrl: 'templates/school.html',
        controller: 'SchoolController'
    })
    .when('/library', {
        templateUrl: 'templates/library.html',
        controller: 'LibraryController'
    })
    .when('/activity', {
        templateUrl: 'templates/activity.html',
        controller: 'ActivityController'
    })
    .when('/museum', {
        templateUrl: 'templates/museum.html',
        controller: 'MuseumController'
    });
});