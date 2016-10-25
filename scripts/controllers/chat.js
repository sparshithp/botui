/**
 * Created by sparshithp on 10/24/16.
 */
app.controller('chatCtrl', function($scope, $auth, $alert, $http, $rootScope, $location, $anchorScroll) {
    console.log($auth.getToken());
    $location.hash('scrollArea');

    // call $anchorScroll()
    $anchorScroll();
    $rootScope.title = "Chat";
    $scope.chats = [];
    $scope.sendMessage = function(){
        $scope.chats.push({
            response: false,
            text: $scope.msg
        });
        $location.hash('scrollArea');

        // call $anchorScroll()
        $anchorScroll();
        $http.post('http://localhost:8080/parse', {userId: 'sffsf', text: $scope.msg})
            .then(
                function(response){
                    $scope.msg = "";
                    $scope.chats.push({
                        response : true,
                        text: response.data
                    });
                    $location.hash('scrollArea');

                    // call $anchorScroll()
                    $anchorScroll();
                },
                function(response){
                    // failure callback
                }
            );
    }
});