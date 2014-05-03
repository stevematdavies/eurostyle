"use strict";

var app = angular.module('EuroStyleApp',[
    'ngResource',
    'ngRoute',
    'firebase',
    'ui.bootstrap'
]);

    app.config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: 'views/_view_main.html',
                controller:  'MainCtrl'
        })
            .when('/voting',{
                templateUrl: 'views/_view_voting.html',
                controller: 'VotingCtrl'
            });
    });

app.constant('FIREBASE_URI','https://data-eurostyle.firebaseio.com/');
app.constant('FALLBACK_URI','ajax/fallback/data/');
