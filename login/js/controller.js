var app = angular.module('RosApp');

app.controller('FirstController', ['$scope', '$firebaseAuth', function ($scope, $firebaseAuth) {
    //console.log($firebaseAuth());
    $firebaseAuth().$onAuthStateChanged(function (user) {
        console.log(user);
        if (user) {
            $scope.user = user;
        } else {
            $scope.user = null;
        }
    });
}]);

app.controller('SignUpController', ['$scope', '$firebaseAuth', '$location', function ($scope, $firebaseAuth, $location) {
    $scope.signUp = function (user) {
        $firebaseAuth().$createUserWithEmailAndPassword(user.email, user.password)
            //console.log($firebaseAuth());
            .then(function (fireUser) {
                if (fireUser) {
                    var theUser = firebase.auth().currentUser;
                    theUser.updateProfile({
                        displayName: user.username
                    }).then(function () {
                        //if Update success
                    }).catch(function () {
                        //if an error happened
                    });
                    firebase.database().ref('users/' + fireUser.uid).set({
                        username: user.username
                    });
                    $location.path('/');
                }
            }).catch(function (error) {
                //console.log(error);
                $scope.error = error.message;
            })
    }
}]);

app.controller('LoginController', ['$scope', '$firebaseAuth', '$location', function ($scope, $firebaseAuth, $location) {
    $scope.login = function (user) {
        $firebaseAuth().$signInWithEmailAndPassword(user.email, user.password)
            //console.log(user);
            .then(function (user) {
                $location.path('/');
            })
            .catch(function (error) {
                //console.log(error);
                $scope.error = error.message;
            });
    }
  
}]);

app.controller('AuthCtrl', ['$scope', '$location', '$firebaseAuth', function ($scope, $location, $firebaseAuth) {
    $firebaseAuth().$onAuthStateChanged(function (user) {
        console.log(user);
        if (user) {
            $scope.user = user;
        } else {
            $scope.user = null;
        }
    });
    $scope.signOut = function () {
        $firebaseAuth().$signOut();
        $location.path('/');
    }
}]);

/**********************************/
app.controller('SchoolController', function($scope, $sce) {
    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }
    $scope.school = {src:"https://ola.github.io/skola/", title:"School"};
});

app.controller('LibraryController', function($scope, $sce) {
    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }
    $scope.library = {src:"https://razan.github.io/bibliotek/", title:"Library"};
});

app.controller('ActivityController', function($scope, $sce) {
    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }
    $scope.activity = {src:"https://sara.github.io/anläggningar/", title:"Activity"};
});

app.controller('MuseumController', function($scope, $sce) {
    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }
    $scope.museum = {src:"https://sara.github.io/anläggningar/", title:"Anläggningar"};
});