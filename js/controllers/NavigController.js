'use strict';

dashboardApp.controller('NavigController',
  function NavigController($scope, users, credentials) {

    $scope.$watch(credentials.getFinalTrigger, function (newValue, oldValue, scope) {
      if (newValue && newValue !== oldValue) {
          var cred = credentials.getValues();

          $scope.hostname = cred.hostname;
          $scope.username = cred.username;
          $scope.password = cred.password;
          $scope.port = cred.port;
          
      }
    });


  });
