"use strict";

app.controller('MainCtrl',function($scope,$firebaseSimpleLogin, FIREBASE_URI) {

    $scope.loginService = $firebaseSimpleLogin(new Firebase(FIREBASE_URI));

    $scope.newUser = {email: '', password: ''};
    $scope.currentUser = null;

    $scope.login = function (email, password) {
        $scope.loginService.$login('password',{email:email,password:password})
            .then(function(user){
                $scope.currentUser = user;
                $scope.resetForm();
            });
    }

    $scope.register = function (email, password) {
       $scope.loginService.$createUser(email,password)
           .then(function(user){
               $scope.currentUser = user;
               $scope.resetForm();
               $scope.route()
           });
    };

    $scope.resetForm = function () {
        $scope.newUser = {email: '', password: ''};
    };

    $scope.getCurrentUser = function () {
        $scope.loginService.$getCurrentUser()
            .then(function(user){
                $scope.currentUser = user;
            });
    };

    $scope.getCurrentUser();

    $scope.logout = function () {
        $scope.loginService.$logout();
        $scope.currentUser = null;
    };


});
