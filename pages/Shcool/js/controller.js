var app = angular.module('RosApp');

app.controller('HomeCtrl', ['$scope', function ($scope) {

}]);

app.controller('skolCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.skol = function (omrade1, skoltyp) {
        //console.log($location);
        console.log(omrade1, skoltyp);
        //the path mean the road
        $location.path('/skolresults/' + omrade1 + '/' + skoltyp );
    }

}]);


app.controller('skolResultsCtrl', ['$scope', '$routeParams', 'getSkol', function ($scope, $routeParams, getSkol) {
    //route is the discripe of road
    console.log($routeParams);
    //console.log($routeParams);
    //accessable through $RoutParams
    //console.log($getWeather);
    
    var omrade1 = $routeParams.omrade1;
    var skoltyp= $routeParams.skoltyp;
    
    
    getSkol.inputskol(omrade1, skoltyp)
     .then(function (response) {
            console.log(response);
          $scope.resor   = response.records;// rescor we get it from ang repeat
          $scope.resor.length;

        });
}]);






















