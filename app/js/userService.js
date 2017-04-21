'use strict';

app.factory("userService", function() {
    var user = null;

    function setUser(u) {
        user = u;
    }

    function getUser() {
        if (user == null) { // if no user
            return {    // return test user
                name:       'Larry Page',
                email:      'ceo@google.com',
                password:   'iamrich',
                testData:   true
            };
        } else {
            return user;
        }
    }

    return {
        setUser: setUser,
        getUser: getUser,
    }
});
