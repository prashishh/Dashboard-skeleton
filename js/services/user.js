'use strict';

dashboardApp.factory('users', function() {
  var user = {
    username: null,
    password: null
  };

  return user;
});

dashboardApp.factory('credentials', function() {
  
  var cred = {
    hostname: '1',
    username: null,
    password: null,
    port: null
  };

  return {
    getHostname: function() {
        return cred.hostname;
    },
    setHostname: function(value) {
      console.log(value);
      cred.hostname = value;
      console.log(value);
    }
  }

/*
 credService.getHostname = function() {
    return cred.hostname;
  };

  credService.setHostname = function(value) {
    cred.hostname = value;
    console.log(cred.hostname);
  };
  */

  return cred;
});

