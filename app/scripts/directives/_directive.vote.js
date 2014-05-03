"use strict";

app.directive('voteBox',function(){
    return {
        restrict: 'E',
        templateUrl: 'views/templates/_templ_vote.html',
        scope:{
            country:'@'
        },
        link:function(scope,element,attrs){
            scope.vote = {};
            scope.vote.category =    attrs.cat;
            scope.vote.description = attrs.desc;
            scope.saveVote = function(vote){
                scope.vote.country = scope.country;
                scope.vote.score = vote.score;
                scope.vote.comment = vote.comment;
                console.log(scope.vote);
            }
        }

    }
});