app.controller('LoginCtrl', function($scope, $alert, $auth, $rootScope) {
    $rootScope.title = "Login";
    console.log($scope.title);
    $scope.login = function() {
      $auth.login({ email: $scope.email, password: $scope.password })
        .then(function(res) {
            console.log($auth.isAuthenticated());
        })
        .catch(function(response) {
            console.log(response);
            $scope.message = "wrong";
        });
    };
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(){
        })
        .catch(function(response) {
        });
    };
  });