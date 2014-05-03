"use strict";

app.directive('countriesList',['FallbackService',function(FallbackService){
    return {
        restrict: 'E',
        templateUrl: 'views/templates/_templ_countries.html',
        controller: 'VotingCtrl'
    }
}]);