"use strict";

app.controller('LaunchpadCtrl',function($scope,$firebase,$window,FIREBASE_URI){

    $scope.users    = $firebase(new Firebase(FIREBASE_URI+'/users'));
    $scope.votes    = $firebase(new Firebase(FIREBASE_URI+'/votes'));
    $scope.results  = $firebase(new Firebase(FIREBASE_URI+'/results'));

    $scope.userCount = 0;

    $scope.users.$on('change',function(){
        $scope.votect();
    });

    $scope.users.$on('child_added',function(){
        $scope.userCount +=1;
    });

    $scope.users.$on('child_removed',function(){
        $scope.userCount -=1;
    })


    $scope.votect = function(){
        if($scope.userCount>0){
            $scope.x = 's';
            $scope.descriptor = 'are';
        } else {
            $scope.x = '';
            $scope.descriptor = 'is';
        }
    }

    $scope.addUser = function(user){
        user.id = $window.btoa(user);
        $scope.users.$add(user);

    }

});