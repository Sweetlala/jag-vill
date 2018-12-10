var app = angular.module('RosApp');

app.controller('HomeCtrl', ['$scope', function ($scope) {

}]);

app.controller('ActivityController', ['$scope', '$location', function ($scope, $location, $window) {
    $scope.activity = function (adress) {
        console.log(adress);
        if (adress === undefined) {
            swal("You must enter Adress or Category! ");
            return false;
        };
        //console.log($location);
        // console.log(adress);
        //the path mean the road
        $location.path('/activity-results/' + adress);
    }
}]);

app.controller('ActivityResultsController', ['$scope', '$routeParams', 'getAktivities', function ($scope, $routeParams, getAktivities) {
    //route is the discripe of road
    //console.log($routeParams);
    //accessable through $RoutParams
    //console.log($getactivity);
    var adress = $routeParams.adress;
    getAktivities.inputactivity(adress)
        .then(function (response) {
            //console.log(response);
            $scope.aktivities = response.records;
            //console.log($scope.aktivities.length);
            $scope.aktivities.length;


        });
}]);