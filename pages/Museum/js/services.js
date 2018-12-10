var app = angular.module('RosApp');

app.factory('getMuseums', ['$http', function ($http) {
    var museum = {
        // All functionality here
        inputmuseum: function (adress) {
            var adress = adress;
            //https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=museer-och-upplevelser&q=Kungsgatan+11
            var url = 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=museer-och-upplevelser&q='+ adress;
            //console.log(url);
            return $http.get(url)
                .then(function (data) {
                    return data.data;
                })
        }
    };
    return museum;
}]);