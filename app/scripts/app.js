"use strict";

var app = angular.module('EuroStyleApp',[
    'ngResource',
    'ngRoute',
    'firebase'
]);

    app.config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: 'views/_view_main.html',
                controller:  'MainCtrl'
        })
            .when('/launchpad',{
                templateUrl: '../views/_view_launchpad.html',
                controller:  'LaunchpadCtrl'
            })

            .when('/voting',{
                templateUrl: 'views/_view_voting.html',
                controller: 'VotingCtrl'
            });
    });

app.constant('FIREBASE_URI','https://data-eurostyle.firebaseio.com/');
