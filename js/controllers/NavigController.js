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

    $scope.$watch(temp.isTablesEmpty, function (newValue, oldValue, scope) {
      console.log(oldValue + ' ' + newValue);
      if (newValue !== oldValue) {
          var tables = temp.getTables();
          $scope.tables = tables;
      } 
    });

  });
