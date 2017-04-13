'use strict';

app.factory("userService", function() {
    var user = null;

    function setUser(u) {
        user = u;
    }

    function getUser() {
        return user;
    }

    function getTestUser() {
        return {
            name:       'Larry Page',
            email:      'ceo@google.com',
            password:   'iamrich'
        };
    }

    return {
        setUser: setUser,
        getUser: getUser,
        getTestUser: getTestUser
    }
});
