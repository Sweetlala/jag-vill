var app = angular.module('RosApp');

app.controller('HomeCtrl', ['$scope', function ($scope) {

}]);

app.controller('MuseumController', ['$scope', '$location', function ($scope, $location, $window) {
    $scope.museum = function (adress) {
        console.log(adress);
        if (adress === undefined) {
            swal("You must enter Adress or museum name! ");
            return false;
        };
        //console.log($location);
        // console.log(adress);
        //the path mean the road
        $location.path('/museum-results/' + adress);
    }
}]);


app.controller('MuseumResultsController', ['$scope', '$routeParams', 'getMuseums', function ($scope, $routeParams, getMuseums) {
    //route is the discripe of road
    //console.log($routeParams);
    //accessable through $RoutParams
    //console.log($getmuseum);
    var adress = $routeParams.adress;
    getMuseums.inputmuseum(adress)
        .then(function (response) {
            //console.log(response);
            $scope.museums = response.records;
            //console.log($scope.museums.length);
            $scope.museums.length;


        });
}]);