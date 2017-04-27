'use strict';

app.factory("mapService", function() {
    if (window.map == undefined)
        window.map = $("<div></div>").attr({id: "map"}).get(0);
});