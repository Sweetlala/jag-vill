var app = angular.module('RosApp');
//var url = `//https://data.opendatasoft.com/api/records/1.0/search/?dataset=skolor_ny%40helsingborg&facet=omrade&facet=huvudman&facet=namn&facet=skoltyp`;

app.factory('getSkol', ['$http', function ($http) {
    var skol = {
        // All functionality here
        inputskol: function (omrade1, skoltyp) {//intialization
            var omrade1 = omrade1;
            
            var skoltyp =  skoltyp;

     //       
           // /api/records/1.0/search/?dataset=skolor_ny&q=Raml%C3%B6sa&facet=namn&facet=omrade&facet=skoltyp&facet=huvudman&refine.skoltyp=F%C3%B6rskola;
           var url=   "https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=skolor_ny&q="+omrade1+"&facet=namn&facet=omrade&facet=skoltyp&facet=huvudman&refine.skoltyp="+skoltyp;
 
 //       var url = `https://data.opendatasoft.com/api/records/1.0/search/?dataset=skolor_ny%40helsingborg&facet=omrade&facet=huvudman&facet=namn&facet=skoltyp`;
             console.log(url);
            return $http.get(url)
                .then(function (data) {
                    return data.data;
                })
        }
    };
    return skol;
}]);
/*var app = angular.module("myApp",[]);

app.controller("mycntrl",["$scope","$http",function($scope,$http){
   $scope.show = function(){
       var name = $scope.name;
       var url='https://api.helsingborg.se/event/json/wp/v2/event';
       $http.get(url)
           .then(function (response) {

               console.log(response.data);
               for(var i=0;i<response.data.length;i++){
                   console.log(response.data[i].date);
               }

               // var string = name + response.data;
               // $scope.result= string;
           })
           .catch(function (err) {
               console.log(err);
           })
   }
}]);*/