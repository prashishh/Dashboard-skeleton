'use strict';

dashboardApp.controller('NavigController',
  function NavigController($scope, temp, credentials) {

    
    $scope.$watch(credentials.getFinalTrigger, function (newValue, oldValue, scope) {
      if (newValue && newValue !== oldValue) {
          var cred = credentials.getValues();
          $scope.hostname = cred.hostname;
          $scope.username = cred.username;
          $scope.password = cred.password;
          $scope.port = cred.port;
      } 
    });

    $scope.$watch(temp.isDatabasesEmpty, function (newValue, oldValue, scope) {
      if (newValue !== oldValue) {
          var databases = temp.getDatabases();
          $scope.databases = databases;
      } 
    });

    $scope.selectedVals = function(table, column) {
      console.log(table + " " + column);
    }

  });
