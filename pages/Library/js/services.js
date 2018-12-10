var app = angular.module('RosApp');

app.factory('getLibraries', ['$http', function ($http) {
    var library = {
        // All functionality here
        inputlibrary: function (adress) {
            var adress = adress;
            //https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=bibliotek&q=Johan+Ban%C3%A9rs+gata+66&facet=namn

            var url = 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=bibliotek&q=' + adress + '&facet=namn';
            //console.log(url);
            return $http.get(url)
                .then(function (data) {
                    return data.data;
                })
        }
    };
    return library;
}]);