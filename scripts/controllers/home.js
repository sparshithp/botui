/**
 * Created by sparshithp on 6/10/16.
 */
app.controller('HomeCtrl', function($scope, $alert, $auth, $rootScope, $http) {
    $rootScope.title = "Meals";
    console.log($auth.isAuthenticated());
    $http({
        method: 'GET',
        url: 'http://localhost:3000/api/me',
        skipAuthorization: true // `Authorization: Bearer <token>` will not be sent on this request.
    }).then(function(res){
        console.log(res);
    });
});