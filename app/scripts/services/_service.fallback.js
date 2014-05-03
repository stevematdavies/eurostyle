"use strict";

app.factory('FallbackService',function(FALLBACK_URI,$http){
    // This is used, for resources that are retrieved over http, in case
    // they are no longer available
    return {
        getResource: function(name){
            var endpoint = FALLBACK_URI+'/'+name+'.json';
            return $http.get(endpoint);
        }
    }

});