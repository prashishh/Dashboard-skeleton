'use strict';

dashboardApp.factory('temp', function() {
  var user = {
    username: null,
    password: null
  };

  var tables = new Array();

  return {
    getTables: function() {
      return tables;
    },
    setTables: function(table) {
      tables = table;
    },
    isTablesEmpty: function() {
      if(tables.length==0) 
        return 1;
      else
      return 0;
    }
  }

  return user;
});



