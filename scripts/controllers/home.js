/**
 * Created by sparshithp on 6/10/16.
 */
app.controller('HomeCtrl', function($scope, $alert, $auth, $rootScope) {
    $rootScope.title = "Meals";
    console.log($auth.isAuthenticated());
});