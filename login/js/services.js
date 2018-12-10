var app = angular.module('RosApp');

app.factory('getAktivities', ['$http', function ($http) {
    var activity = {
        // All functionality here
        inputactivity: function (adress) {
            var adress = adress;
            //https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=anlaggningar0&q=Benarpsv%C3%A4gen&facet=adress
            var url = 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=anlaggningar0&q='+adress+'&facet=adress';
            //console.log(url);
            return $http.get(url)
                .then(function (data) {
                    return data.data;
                })
        }
    };
    return activity;
}]);