/**
 * Created by sparshithp on 6/10/16.
 */
app.controller('HomeCtrl', function($scope, $alert, $auth, $rootScope, $http) {
    $rootScope.title = "Meals";
    console.log($auth.isAuthenticated());
    $http({
        method: 'GET',
        url: 'http://localhost:3000/area/list',
        skipAuthorization: true // `Authorization: Bearer <token>` will not be sent on this request.
    }).then(function(res){
        $scope.areas = res.data.areas;
    });
    $scope.changedArea = function(areaSelected){
        var areadId = areaSelected._id;
        console.log("****Area: "+JSON.stringify(areaSelected));
        $http({
            method: 'GET',
            url: 'http://localhost:3000/meal/list/'+areadId,
            skipAuthorization: true // `Authorization: Bearer <token>` will not be sent on this request.
        }).then(function(res){
            var meals = res.data.meals;
            console.log(res.data);
            $scope.mealImage = meals[0].imageUrl;
            $scope.price = meals[0].price;
            $scope.chefImage = meals[0].chefImageUrl;
            $scope.remCount = meals[0].remainingCount;
            $scope.foodName = meals[0].foodName;
            $scope.deliveryTime = getDateTimeForDisplay(meals[0].availableTime);
            $scope.orderBeforeTime = getDateTimeForDisplay(meals[0].orderBeforeTime);
            console.log($scope.deliveryTime);
        });
    };

    function getDateTimeForDisplay(dateTimeString){
        var date = new Date(dateTimeString);

        // convert to msec
        // add local time zone offset
        // get UTC time in msec
        var local = date.getTime() + (date.getTimezoneOffset() * 60000);

        // create new Date object for different city
        // using supplied offset
        var localDate = new Date(local);
        var hrs = localDate.getHours();
        var min = localDate.getMinutes();
        var amPm = "AM"
        if(hrs/12==1){
            amPm = "PM";
        }
        return hrs+":"+min+" "+amPm;
    }

    /*
    $http({
        method: 'GET',
        url: 'http://localhost:3000/api/me',
        skipAuthorization: true // `Authorization: Bearer <token>` will not be sent on this request.
    }).then(function(res){
        console.log(res);
    });
    */
});