"use strict";

app.controller('VotingCtrl',function($scope,FallbackService){

    FallbackService.getResource('scoring').then(function(resource){
        $scope.instructions = resource.data.text.join();
    });

    FallbackService.getResource('categories').then(function(resource){
        $scope.categories = resource.data.categories;
    });

    FallbackService.getResource('countries').then(function(countries) {
        $scope.countries = countries.data.countries;
    });

    $scope.isVoting = false;
    $scope.votes = [];
    $scope.currentCountry =null;
    $scope.entryInfo = {};

    $scope.startVotingFor = function (country) {

        console.log(country);

        if (country){
            $scope.currentCountry = country;
            $scope.isVoting = true;

           angular.forEach($scope.countries,function(country){
               if (country.country === $scope.currentCountry){
                   $scope.entryInfo = {
                       artist: country.artist,
                       song: country.song
                   }
               }
            });
            console.log($scope.entryInfo);


        }
    }

});