'use strict';

app.factory("mapService", function() {
    window.map = $("<div></div>").attr({id: "map"}).get(0);
});