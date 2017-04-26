'use strict';

app.factory("mapService", function() {
    var map = $("<div></div>").attr({id: "map"}).get();
    
    function getMap() {
        return map;
    }
    
    return {
        getMap: getMap
    };
});