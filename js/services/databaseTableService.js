'use strict';

dashboardApp.factory('databaseTableService', function() {
  var user = {
    username: null,
    password: null
  };

  var tables = new Array();
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
    },
    setTables: function(tbl) {
      tables.push(tbl);
    },
    getTables: function() {
      return tables;
    },
    isTablesEmpty: function() {
      return tables.length;
    },
    removeTables: function() {
      tables = [];
    }
  }

  return databases;
});



