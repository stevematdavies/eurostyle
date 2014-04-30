"use strict";

var app = angular.module('EuroStyleApp',[
    'ngResource',
    'ngRoute',
    'firebase'
]);

app.constant('FIREBASE_URI','https://data-eurostyle.firebaseio.com/');