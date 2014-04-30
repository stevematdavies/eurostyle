"use strict";

app.factory('UserService',function(){
   return {

       createUser: function (user) {
           return {
               username:    user.name,
               country:     user.country,
               winner:      user.winner,
               email:       user.email,
               votes: [],
               addVote: function (v) {
                   votes.push(v)
               }
           }
       },

       createVote: function(user,votedata){
         var vote = {
             tag:       votedata.tag,
             country:   votedata.country,
             vote:      votedata.count,
             comment:   votedata.comment
         }

         user.addVote(vote);
       }
   }

});