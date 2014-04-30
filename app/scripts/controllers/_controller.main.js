"use strict";

app.controller('MainCtrl',function($scope,UserService){
    $scope.app = {};
    $scope.app.users = [];
    $scope.app.currentuser ={};
    $scope.app.name ="EuroStyle";

    console.log($scope.app.users);

    $scope.app.newuser = function(user){
        $scope.app.currentuser = UserService.createUser(user);
        console.log($scope.app.currentuser);
        

        
    }

    




});