'use strict';

app.factory("mapService", function() {
    var map = $("<div></div>");
    
    function getMap() {
        return map;
    }
    
    return {
        getMap: getMap
    };
});