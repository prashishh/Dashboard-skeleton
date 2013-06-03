'use strict';

dashboardApp.factory('temp', function() {
  var user = {
    username: null,
    password: null
  };

  var databases  = new Array();

  return {
    getDatabases: function() {
      return databases;
    },
    setDatabases: function(db) {
      databases = db;
    },
    isDatabasesEmpty: function() {
      if(databases.length==0) 
        return 1;
      else
      return 0;
    }
  }

  return databases;
});



