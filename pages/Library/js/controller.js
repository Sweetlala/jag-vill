var app = angular.module('RosApp');

app.controller('HomeCtrl', ['$scope', function ($scope) {

}]);

app.controller('LibraryController', ['$scope', '$location', function ($scope, $location, $window) {
    $scope.library = function (adress) {
        console.log(adress);
        if (adress === undefined) {
            swal("You must select Library name! ");
            return false;
        };
        //console.log($location);
        // console.log(adress);
        //the path mean the road
        $location.path('/library-results/' + adress);
    }
}]);


app.controller('LibraryResultsController', ['$scope', '$routeParams', 'getLibraries', function ($scope, $routeParams, getLibraries) {
    //route is the discripe of road
    //console.log($routeParams);
    //accessable through $RoutParams
    //console.log($getlibrary);
    var adress = $routeParams.adress;
    getLibraries.inputlibrary(adress)
        .then(function (response) {
            //console.log(response);
            $scope.libraries = response.records;
            //console.log($scope.libraries.length);
            $scope.libraries.length;


        });
}]);