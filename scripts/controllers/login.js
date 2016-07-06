app.controller('LoginCtrl', function ($scope, $alert, $auth, $rootScope) {
    $rootScope.title = "Login";
    $scope.message="";
    console.log($scope.title);


    $scope.login = function () {

        var email = $scope.email;
        var password = $scope.password;


        if(!email || !password){
            $scope.message = "Please fill all fields";
            return;
        }
        email = email.toLowerCase();


        $auth.login({email: email, password: password})
            .then(function (res) {
                if (res.data && res.data.message) {
                    $scope.message = res.data.message;
                }
            })
            .catch(function (res) {
                if (res.data && res.data.message) {
                    $scope.message = res.data.message;
                } else {
                    $scope.message = "Network error. Please try again";
                }
            });
    };

    $scope.authenticate = function (provider) {
        $auth.authenticate(provider)
            .then(function () {
            })
            .catch(function (response) {
            });
    };
});