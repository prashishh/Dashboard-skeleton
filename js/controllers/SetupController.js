'use strict';

dashboardApp.controller('SetupController',
  function SetupController($scope, users, credentials) {

    $scope.done = function() {
      credentials.setInitTrigger();
    }

  $scope.$watch(credentials.getInitTrigger, function (newValue, oldValue, scope) {
    if (newValue && newValue !== oldValue) {
        credentials.setNewValues($scope.hostname, $scope.username, $scope.password, $scope.port);
          credentials.setFinalTrigger();
    }
  });


  });
