'use strict';

app.factory("userService", function() {
    var user = ;

    function setUser(u) {
        user = u;
    }

    function getUser() {
        return user;
    }

    return {
        setUser: setUser,
        getUser: getUser,
    }
});
