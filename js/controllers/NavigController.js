'use strict';

dashboardApp.controller('NavigController',
  function NavigController($scope, databaseTableService, credentials, vizService) {

    
    $scope.$watch(credentials.getFinalTrigger, function (newValue, oldValue, scope) {
      if (newValue && newValue !== oldValue) {
          var cred = credentials.getValues();
          $scope.hostname = cred.hostname;
          $scope.username = cred.username;
          $scope.password = cred.password;
          $scope.port = cred.port;
      } 
    });

    $scope.$watch(databaseTableService.isDatabasesEmpty, function (newValue, oldValue, scope) {
      if (newValue !== oldValue) {
          var databases = databaseTableService.getDatabases();
          $scope.databases = databases;
      } 
    });

    $scope.$watch(vizService.checkIfEmpty, function (newValue, oldValue) {
      if (newValue !== oldValue) {
          console.log(newValue);
      } 
    });

    $scope.selectedVals = function(table, column) {
      if($('#labelattr').is(':checked')) {
        $scope.table_1 = table;
        $scope.column_1 = column;  
        vizService.setVizLabel(table, column);
      } else {
        $scope.table_2 = table;
        $scope.column_2 = column;  
        vizService.setVizQuantity(table, column);
      } 
    }

  });
