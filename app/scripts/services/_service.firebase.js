"use strict";

app.factory('DataService',['$firebase','FIREBASE_URI',function($firebase,FIREBASE_URI){
        var ref_users = new Firebase(FIREBASE_URI+'/users');
        var fb_user = $firebase(ref_users);
        var users = [];
        return {
            setUser:function(u){
                fb_user.$add({
                    name: u.name,
                    email: u.email
                })
            },

            removeUser:function(k){
                fb_user.$remove(k);
                ref_users.on("child_removed",function(snapshot){
                    users.push(snapshot.val());
                });
            },

            getAllUsers:function(){
                ref_users.on("child_added",function(snapshot){
                    users.push(snapshot.val());
                });
                return users;

            }
        }



}]);