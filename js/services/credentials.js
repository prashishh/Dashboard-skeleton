'use strict';

dashboardApp.factory('credentials', function() {
  var cred = {
    hostname: null,
    username: null,
    password: null,
    port: null,
    database: null,
    init_trigger: 0,
    final_trigger: 0
  };

  return {
    getValues: function() {
        return cred;
    },
    setNewValues: function(host, username, password, port) {
      cred.hostname = host;
      cred.username = username ;
      cred.password = password;
      cred.port = port;
    },
    setDatabase: function(db) {
      cred.database = db;
      console.log(cred.database);
    },
    getInitTrigger: function() {
      return cred.init_trigger;
    },
    setInitTrigger: function() {
      if(cred.init_trigger == 0)
        cred.init_trigger = 1;
      else
        cred.init_trigger = 0;

    },
    getFinalTrigger: function() {
      return cred.final_trigger;
    },
    setFinalTrigger: function() {
      if(cred.final_trigger == 0)
        cred.final_trigger = 1;
      else
        cred.final_trigger = 0;
    }
  }

  return cred;

});