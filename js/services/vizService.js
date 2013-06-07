'use strict';

dashboardApp.factory('vizService', function() {

  var viz_label = {
    table: "",
    column: ""
  };

var viz_quantity = {
    table: "",
    column: ""
  };

  return {
    setVizLabel: function(db, tbl) {
      viz_label.table = db;
      viz_label.column = tbl;
    },
    setVizQuantity: function(db, tbl) {
      viz_quantity.table = db;
      viz_quantity.column = tbl;
    },
    checkIfEmpty: function() {
      if (viz_label.table == "" || viz_label.column == "" || viz_quantity.table == "" || viz_quantity.column == "")
        return true;
      else 
        return false;
    }
  }
});



